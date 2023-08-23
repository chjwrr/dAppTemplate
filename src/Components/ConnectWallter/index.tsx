import React, {useContext, useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { isBrowser } from 'react-device-detect';
import useTranslationLanguage from '@/Hooks/useTranslationLanguage';
import { FlexView, FlexViewCenter } from '../View';
import { autoWidthVW, formatAccount } from '@/Common';
import Image from 'next/image';

export default function ConnectWallet() {
  const {t} = useTranslationLanguage()
  return <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      mounted,
    }) => {
      return (
        <ContentView>
          {(() => {
            if (!mounted || !account || !chain) {
              return (
                <FlexView style={{cursor:'pointer',height:'100%',color:'#100F16'}} onClick={openConnectModal}>
                  <WalletIcon>
                    <Image src='/images/walleticon.png' fill alt=''/>
                  </WalletIcon>
                  <Text>Connect Wallet</Text>
                </FlexView>
              );
            }

            if (chain.unsupported) {
              return (
                <FlexView style={{cursor:'pointer',height:'100%',color:'red'}} onClick={openConnectModal}>
                  <WalletIcon>
                    <Image src='/images/walleticon.png' fill alt=''/>
                  </WalletIcon>
                  <Text style={{color:'red'}}>Wrong Network</Text>
                </FlexView>
              );
            }
            return (
              <FlexView style={{cursor:'pointer',height:'100%',color:'#100F16'}} onClick={openAccountModal}>
                <Text>{formatAccount(account.address)}</Text>
              </FlexView>
            );
          })()}
        </ContentView>
      );
    }}
  </ConnectButton.Custom>
}
const Text = styled.span`
  color:#100F16;
  font-size:14px;
  font-weight: 500;
`
const WalletIcon = styled(FlexView)`
  width:24px;
  height:24px;
  margin-right:8px
`
const AddressView = styled(FlexViewCenter)`
  width:fit-content;
  padding:0 ${autoWidthVW(10)};
  @media (max-width: 768px) {
    padding:0;
  };
  cursor:pointer
`
const ContentView = styled(FlexViewCenter)`
  height:${autoWidthVW(52)};
  border-radius:${autoWidthVW(8)};
  background: #a097f8;
  padding:0 ${autoWidthVW(10)};
  width:fit-content;
  margin-right: ${autoWidthVW(40)};
  @media (max-width: 768px) {
    height:36px;
    border-radius:18px;
    margin-right: 0;
    width:100%;
    margin-bottom: ${autoWidthVW(20)};
  }
`
