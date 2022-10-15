import { NextPage } from 'next'
import React, {
  useCallback,
  ChangeEvent,
  useReducer,
  MouseEvent,
  useState,
} from 'react'

enum ActionType {
  CHANGE_INPUT = 'CHANGE_INPUT',
}

interface ActionInterface {
  type: ActionType
  name: string
  value: string
}

interface IInputState {
  name: string
  address: string
  zipcode: string
  message?: string
}

const reducer = (prevState: IInputState, action: ActionInterface) => {
  if (action.type === ActionType.CHANGE_INPUT) {
    return {
      ...prevState,
      [action.name]: action.value,
    }
  }

  return prevState
}

const Home: NextPage = () => {
  const initialState = {
    name: '',
    address: '',
    zipcode: '',
    message: '',
  }

  const [resultVisible, setResultVisible] = useState(false)

  const [state, dispatch] = useReducer(reducer, initialState)

  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch({
      type: ActionType.CHANGE_INPUT,
      name,
      value,
    })
  }, [])

  const onClickSumbit = (e: MouseEvent) => {
    setResultVisible(true)
  }

  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', width: '300px' }}
    >
      <input name="name" placeholder="받는사람" onChange={onChangeInput} />
      <input name="address" placeholder="주소" onChange={onChangeInput} />
      <input name="zipcode" placeholder="우편번호" onChange={onChangeInput} />
      <input name="message" placeholder="배송메시지" onChange={onChangeInput} />
      <button onClick={onClickSumbit}>구매하기</button>

      {resultVisible && (
        <div>
          <p>받는사람: {state.name}</p>
          <p>주소: {state.address}</p>
          <p>우편번호: {state.zipcode}</p>
          <p>배송메시지: {state.message}</p>
        </div>
      )}
    </section>
  )
}

export default Home
