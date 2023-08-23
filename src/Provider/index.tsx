'use client'
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {WagmiConfig } from 'wagmi';
import LoadingProvider from '../Provider/loadingProvider'
import ModalProvider from '../Provider/modalProvider'
import NoticeProvider from '../Provider/NoticeProvider'
import ReactQueryProvider from './ReactQueryProvider';
import { chains, wagmiConfig } from './WagmiConfig';
import { Suspense, useEffect, useState } from 'react'
import PageLoading from '@/Components/PageLoading';
import { Provider } from 'react-redux'
import { reduxStore, persistor } from '@/Redux';
import { PersistGate } from 'redux-persist/integration/react';
import MessageProvider from './MessageProvider';

export default function DAppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [loadingEnd,setLoadingEnd] = useState(false)
  useEffect(()=>{
    setLoadingEnd(true)
  },[])
  return !loadingEnd ? <PageLoading/> : <Suspense fallback={<PageLoading/>}>
    <Provider store={reduxStore}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <WagmiConfig config={wagmiConfig}>
          <ReactQueryProvider>
            <RainbowKitProvider chains={chains} modalSize={"compact"}>
              <LoadingProvider>
                <ModalProvider>
                  <MessageProvider>
                    {children}
                  </MessageProvider>
                </ModalProvider>
              </LoadingProvider>
            </RainbowKitProvider>
          </ReactQueryProvider>
        </WagmiConfig>
      {/* </PersistGate> */}
    </Provider>
  </Suspense>
}
