import useTranslationLanguage from '@/Hooks/useTranslationLanguage'
import { useModalContext } from '@/Provider/modalProvider'
import { changeLanguage, useLanguage } from '@/Redux/setting'
import React, { useEffect, useState} from 'react'
import styled  from 'styled-components'
import { useDispatch } from 'react-redux'
import { LanguageType, Languages } from '@public/locales/LocalCommon'
import Image from 'next/image'
import { FlexView, FlexViewCenter, FlexViewCenterColumn, FlexViewColumn } from '../View'
import { autoWidthVW } from '@/Common'


export default function Language() {
  const modalContext = useModalContext()
  const {t} = useTranslationLanguage()
  const dispatch = useDispatch()
  const currentLan = useLanguage()
  const [show,setShow] = useState(false)
  function onSelect(lan:LanguageType){
    modalContext.hidden()
    dispatch(changeLanguage(lan))
  }
  function onChangeLan(){
    setShow(!show)
  }

  return(
    <LanIconView onClick={onChangeLan}>
      <LanIcon src={`/images/icon_lan_${currentLan}.png`}/>
      {currentLan.toUpperCase()}
      {show && <ChangeLan onSelect={onSelect}/>}
    </LanIconView>
  )
}

function ChangeLan({onSelect}:any){
  function onChangeLan(lan:LanguageType){
    onSelect(lan)
  }
  return <ChangeLanView className='animate__animated animate__bounceInRight'>
    {
      Languages.map((item:any,index:number)=>{
        return <SubContentView key={index} onClick={()=>onChangeLan(item.language)}>
          <div>{item.title}</div>
        </SubContentView>
      })
    }
  </ChangeLanView>
}
const ChangeLanView = styled(FlexViewCenterColumn)`
  position:absolute;
  right:${autoWidthVW(0)};
  top:${autoWidthVW(70)};
  @media (max-width: 768px) {
    top:${autoWidthVW(60)};
    right:${autoWidthVW(20)};
  };
  background: rgba(1, 1, 1, 0.8);
  align-items: flex-start;
  border-radius: ${autoWidthVW(6)};
  width:${autoWidthVW(180)};
`
const ContentView = styled(FlexViewCenter)`
  height:${autoWidthVW(50)};
  @media (max-width: 768px) {
    height:${autoWidthVW(34)};
    border-radius: ${autoWidthVW(10)};
    padding:0 ${autoWidthVW(10)};
    border: ${autoWidthVW(1)} solid #AA86FF
  };
  cursor:pointer;
  border-radius: ${autoWidthVW(6)};
  padding:0 ${autoWidthVW(10)};
  border: ${autoWidthVW(2)} solid #AA86FF
`
const SubContentView = styled(ContentView)`
  border:0;
  @media (max-width: 768px) {
    margin:${autoWidthVW(5)} ${autoWidthVW(10)};
  };
`

const LanIcon = styled.img`
  width:${autoWidthVW(32)};
  height:${autoWidthVW(32)};
  margin-right:${autoWidthVW(10)};
  @media (max-width: 768px) {
    width:${autoWidthVW(20)};
    height:${autoWidthVW(20)};
    margin-right:${autoWidthVW(10)};
  }
`

const LanIconView = styled(FlexView)`
  border: 1px solid #AA86FF;
  height:${autoWidthVW(52)};
  border-radius:${autoWidthVW(8)};
  padding:0 ${autoWidthVW(20)};
  @media (max-width: 768px) {
    display: none;
  };
  cursor:pointer;
`