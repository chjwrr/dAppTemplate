import { formatBalance } from '@/Common';
import { BigNumberish, Contract, MaxUint256, TransactionResponse, formatUnits, parseUnits } from 'ethers';
import { useTokenAllowance, useApprove } from '@/Hooks/useTokenContract';
import { useMutation, useQuery } from 'react-query';
import { IntoEarlyBird_ADDRESSSES, IntoSocialMining_ADDRESSSES, NFT_ADDRESSSES, USDT_ADDRESSSES } from '@/Contract/addresses';
import { getContract, readContract } from '@wagmi/core'
import { ApprovalState } from '@/Common';
import { Address, useAccount, useNetwork, useContractWrite } from 'wagmi';
import { AddressMap } from './addresses';
import NFT_ABI from '../ABI/NFT.json'
import ERC_20_ABI from  '../ABI/ERC20.json'
import IntoSocialMining_ABI from  '../ABI/IntoSocialMining.json'
import IntoEarlyBird_ABI from  '../ABI/IntoEarlyBird.json'

import { useLoadingContext, LoadingType } from '@/Provider/loadingProvider';
import dayjs from 'dayjs';
import { postRequest } from '@/API';
import { useDynamicContract, useTokenContract } from '@/Hooks/useContract';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { IntoSocialMining } from '@/ABI/typechain';

interface Transaction {
  title: string,
  args: any[],
  cost?:string | number,
  gasLimit?: boolean,
  onSuccess?: Function,
  onError?: Function
}
export function useSendTransaction({
  contractAddress,
  abi,
  functionName,
  tokenAddress = USDT_ADDRESSSES,
}:{
  contractAddress:AddressMap,
  abi:any,
  functionName:string,
  tokenAddress?:AddressMap,
}) {
  const {openConnectModal} = useConnectModal()
  const loading = useLoadingContext()
  const {chain = { id : 56 }} = useNetwork()
  const {address} = useAccount()
  const contract = useDynamicContract(contractAddress,abi) as any
  const tokenContract = useTokenContract(tokenAddress[chain.id as keyof AddressMap])
  function sendTransaction(params: Transaction) {
    if (!params.cost){
      return new Promise(async() => {
        if (!address){
          loading.show(LoadingType.error, 'Please connect wallet')
          openConnectModal && openConnectModal()
          return
        }
        send(params,functionName)
      })
    }
    loading.show(LoadingType.pending, 'Querying authorization information...')
    return new Promise(async() => {
      if (!address){
        loading.show(LoadingType.error, 'Please connect wallet')
        openConnectModal && openConnectModal()
        return
      }
      if (tokenContract){
        try {
          const allowance:bigint = await tokenContract.allowance(address, contractAddress[chain.id as keyof AddressMap]);
          if (Number(formatUnits(allowance)) == 0 || Number(formatUnits(allowance)) < Number(params.cost)){
            loading.show(LoadingType.pending, 'Authorizing...')
            tokenContract.approve(contractAddress[chain.id as keyof AddressMap], MaxUint256)
              .then(async (response: TransactionResponse) => {
                  loading.show(LoadingType.pending, response.hash)
                  await response.wait();
                  send(params,functionName)
              })
              .catch((err: any) => {
                console.log('approve error===',err)
                  loading.show(LoadingType.error, err.data?.message || err.message)
              })
          }else {
            send(params,functionName)
          }
        } catch (error:any) {
          console.log('allowance error===',error)

        }
      }
    })

    async function send(params:Transaction,functionName:string){
      if (!contract){
        loading.show(LoadingType.error,'create dynamic Contract error')
        return
      }
      loading.show(LoadingType.confirm, params.title)
      contract[functionName](...params.args,params.gasLimit == false ? {} : {gasLimit:1500000})
      .then(async (response: TransactionResponse) => {
        loading.show(LoadingType.pending, response.hash)
        const result:any = await response.wait();
        console.log('result===',result)
        if (result.status == 1){
          loading.show(LoadingType.success, response.hash)
          params.onSuccess && params.onSuccess()
        }else {
          loading.show(LoadingType.error,'Please check the error message in the blockchain explorer')
          params.onError && params.onError()
        }
      })
      .catch((err: any) => {
        console.log(functionName,err)
        loading.show(LoadingType.error,err.reason || err.message ,err.transactionHash)
        params.onError && params.onError()
      })
    }
  }

  return useMutation((params: Transaction) => sendTransaction(params))
}

// export function useIsMint(){
//   const {address} = useAccount()
//   const {chain = { id : 56 }} = useNetwork()
//   // const mintContranct = getContract({
//   //   address:IntoSocialMining_ADDRESSSES[chain.id as keyof AddressMap] as Address,
//   //   abi:IntoSocialMining_ABI,
//   // })


//   const mintContranct = useDynamicContract<IntoSocialMining>(IntoSocialMining_ADDRESSSES,IntoSocialMining_ABI)

//   async function fetchData(){
//     if (!address || !mintContranct){
//       return
//     }

//     const lastDay = dayjs().format('YYYYMMDD')

//     // nftContranct.estimateGas.price([1])
//     const isMining:boolean = await mintContranct.isMining(lastDay,address)
//     console.log('isMining===',isMining)
//     return {
//       isMining
//     }
//   }
//   return useQuery(["useIsMint"], fetchData, {
//     enabled:!!chain.id && !!address && !!mintContranct,
//     // refetchInterval: config.refreshInterval,
//   })

// }
