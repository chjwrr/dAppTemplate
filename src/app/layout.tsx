import './globals.css'
import 'animate.css'
import '@rainbow-me/rainbowkit/styles.css'
import 'rc-texty/assets/index.css';
import Provider from '@/Provider';
// import Header from "@/Components/Header";
import { PaladinsExpandedFont } from '@public/fonts';

export const metadata = {
  title: 'INTO',
  description: 'INTO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${PaladinsExpandedFont.variable}`}>
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
      <body>
        <Provider>
          {/*<Header></Header>*/}
          {children}
          {/*<Footer></Footer>*/}
        </Provider>
      </body>
    </html>
  )
}
