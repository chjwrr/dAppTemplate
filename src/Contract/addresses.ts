import { ChainID } from './chains';

export interface AddressMap {
  [cid:number]:`0x${string}` | string
}

export const USDT_ADDRESSSES:AddressMap = {
  [ChainID.BSC]: "0x55d398326f99059fF775485246999027B3197955",
};




export const NFT_ADDRESSSES:AddressMap = {
  [ChainID.BSC]: "0xC80a9E622D0df2368eAAE527734873B784716bBd",
};


export const IntoSocialMining_ADDRESSSES:AddressMap = {
  [ChainID.MATCH]: "0x0007B44b6Ca810EBff3ED4560cD7d997b08BA104",
};

export const PledgeStake_ADDRESSSES:AddressMap = {
  [ChainID.MATCH]: "0x909448fBb09880AF2812d263f7E5C77dcfC2AB53",
};

export const PledgePool_ADDRESSSES:AddressMap = {
  [ChainID.MATCH]: "0xC90EA0CedFD49a7D310a4eFf05cfA646399C641c",
};
export const IntoEarlyBird_ADDRESSSES:AddressMap = {
  [ChainID.MATCH]: "0x73e5D54d076fF1f93391A50B7a9B50018C9FE531",
};

export const NODES_GLOBAL_ADDRESSSES:AddressMap = {
  [ChainID.BSC_TESTNET]: "0x7f1A0c0BFd97AD7d61C6A88Dfad4c27876a2810c",
};
export const TOX_ADDRESSSES:AddressMap = {
  [ChainID.BSC_TESTNET]: "0x22faa4684e3B4E9BE282b31BaD6Aa6e1B423CA82",
  [ChainID.MATCH]: "0x96397347Ea2beE29713Bc48749eB277D6A36A407",
};
