import { createPublicClient, http } from 'viem';

import { BSC_Chain, MATCH_Chain } from '@/Contract/chains';
import {
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets
} from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  okxWallet,
  metaMaskWallet,
  coinbaseWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets';
import { ReactQueryDevtools } from "react-query/devtools";
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {mainnet, polygon, optimism, arbitrum, bscTestnet} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { TokenPocketWallet } from '@/Contract/customWallets/tokenpocket';
export const { chains } = configureChains(
  [BSC_Chain],
  [
    alchemyProvider({ apiKey : ''}),
    publicProvider()
  ]
);

// const { connectors } = getDefaultWallets({
//   appName: 'App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains
// });
const projectId = '771442ad0bb44651b29f3163b52147d3'
const connectors = connectorsForWallets([
  {
    groupName: 'Wallets',
    wallets: [
      injectedWallet({ chains }),
      rainbowWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      TokenPocketWallet({ projectId, chains }),
      okxWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains }),
      coinbaseWallet({ appName:"Into App", chains }),
      trustWallet({ projectId, chains })
    ],
  },
]);

const publicClient = createPublicClient({
  chain: BSC_Chain,
  transport: http()
})
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})