import { autoWidthVW } from "@/Common"
import useTranslationLanguage from "@/Hooks/useTranslationLanguage"
import Image from "next/image"
import styled from "styled-components"
import { FlexView, FlexViewCenter, FlexViewCenterColumn } from "../View"

export default function NotData(){
  const {t} = useTranslationLanguage()
  return <NotdataView>
    <Notdata>
      <Image src={'/images/icon_nodata.png'} fill alt=''/>
    </Notdata>
    <div>{t('No Data')}</div>
  </NotdataView>
}
const NotdataView = styled(FlexViewCenterColumn)`
  margin:${autoWidthVW(61)} 0;
  width:100%;
`
const Notdata = styled(FlexView)`
  width:${autoWidthVW(200)};
  height:${autoWidthVW(200)};
  margin:${autoWidthVW(40)};
  @media (max-width: 768px) {
    width:${autoWidthVW(80)};
    height:${autoWidthVW(80)};
    margin:${autoWidthVW(20)};
  };
`