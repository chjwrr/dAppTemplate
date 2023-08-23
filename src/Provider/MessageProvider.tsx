import React, {
  createContext,
  useContext,
  useRef,
  useMemo,
  useState,
  useEffect
} from 'react'
import styled from 'styled-components'
import { animated } from '@react-spring/web'
import { useTransition } from '@react-spring/web'
import { FlexView } from '@/Components/View'

export enum MessageType {
  success = 0,
  warning = 1,
  error = 2
}
interface configType {
  icon:string,
  color:string
}
const messageConfig:Record<MessageType,configType> = {
  [MessageType.success]:{
    icon:'/images/success.png',
    color:'#73C340'
  },
  [MessageType.warning]:{
    icon:'/images/warning.png',
    color:'#EFB041'
  },
  [MessageType.error]:{
    icon:'/images/error.png',
    color:'#EC5B56'
  }
}

const MessageContext = createContext({
  show:(type:MessageType,msg:string)=>{}
})

export function useMessageContent(){
  return useContext(MessageContext)
}

export default function MessageProvider({children}:any){
  const ref = useRef<null | AddFunction>(null)

  return <MessageContext.Provider value={{
    show:(type:MessageType,msg:string)=>{
      ref.current?.(type,msg)
    }
  }}>
    {children}
    <MessageHub
      children={(add: AddFunction) => {
        ref.current = add
      }}
    />
  </MessageContext.Provider>
}

let id = 0
interface MessageHubProps {
  config?: {
    tension: number
    friction: number
    precision: number
  }
  timeout?: number
  children: (add: AddFunction) => void
}

type AddFunction = (type:MessageType,msg: string) => void

interface Item {
  key: number
  msg: string
}

function MessageHub({
  config = { tension: 125, friction: 20, precision: 0.1 },
  timeout = 10000,
  children,
}: MessageHubProps) {
  const refMap = useMemo(() => new WeakMap(), [])
  const cancelMap = useMemo(() => new WeakMap(), [])
  const [items, setItems] = useState<Item[]>([])

  const transitions = useTransition(items, {
    from: { opacity: 0, height: 0, life: '100%' },
    keys: item => item.key,
    enter: item => async (next, cancel) => {
      cancelMap.set(item, cancel)
      await next({ opacity: 1, height: refMap.get(item).offsetHeight })
      await next({ life: '0%' })
    },
    leave: [{ opacity: 0 }, { height: 0 }],
    onRest: (result, ctrl, item) => {
      setItems(state =>
        state.filter(i => {
          return i.key !== item.key
        })
      )
    },
    config: (item, index, phase) => key => phase === 'enter' && key === 'life' ? { duration: timeout } : config,
  })

  useEffect(() => {
    children((type:MessageType,msg: string) => {
      setItems(state => [...state, { key: id++, msg, type }])
    })
  }, [])

  return (
    <Container>
      {transitions(({ life, ...style }:any, item:any) => {
        const msgType:MessageType= item.type as MessageType
        return <Message style={style}>
          <Content style={{
            backgroundColor:messageConfig[msgType].color
          }} ref={(ref: HTMLDivElement) => ref && refMap.set(item, ref)}>
            <Life style={{ right: life }} />
            <FlexView>
              <Icon src={messageConfig[msgType].icon}/>
              <div>{item.msg}</div>
            </FlexView>
            <Button
              onClick={(e: any) => {
                e.stopPropagation()
                if (cancelMap.has(item) && life.get() !== '0%') cancelMap.get(item)()
              }}>
              <Close src={'/images/close.png'}/>
            </Button>
          </Content>
        </Message>
      })}
    </Container>
  )
}
const Icon = styled.img`
  width:30px;
  height:30px;
  margin-right:10px
`
const Close = styled.img`
  width:30px;
  height:30px;
`

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  width: 0 auto;
  top: 30px;
  margin: 0 auto;
  left: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  align-items: flex-end;
  @media (max-width: 768px) {
    align-items: center;
  }
`

const Message = styled(animated.div)`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  width: 40ch;
  @media (max-width: 768px) {
    width: 100%;
  };
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 10px;
`

const Content = styled.div`
  color: white;
  opacity: 0.9;
  padding: 20px 22px;
  font-size: 1em;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  overflow: hidden;
  height: auto;
  border-radius: 3px;
`

const Button = styled.button`
  cursor: pointer;
  pointer-events: all;
  outline: 0;
  border: none;
  background: transparent;
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0;
  padding-bottom: 14px;
  color: rgba(255, 255, 255, 0.5);
  :hover {
    color: rgba(255, 255, 255, 0.6);
  }
`

const Life = styled(animated.div)`
  position: absolute;
  bottom: 0;
  left: 0px;
  width: auto;
  background-image: linear-gradient(130deg, #00b4e6, #00f0e0);
  height: 5px;
`
