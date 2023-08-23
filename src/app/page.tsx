'use client'
import styles from './page.module.scss'
import commonStyles from '@/Common/common.module.scss'
import classNames from "classnames";
import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <div className={commonStyles.mainView}>
      <div className={commonStyles.mainContent}>
      <div className={classNames(styles.interFont)}>Custom Font hello</div>
      <div className={classNames(styles.PoppinsFont)}>Be a pioneer in on-chain</div>
      </div>
     

    </div>
  )
}
// 使用此方法会导致fast reload 失去作用
// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())


//   // redirect('/login')

//   return {

//   }
// }