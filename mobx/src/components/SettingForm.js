import { observer } from 'mobx-react';
import React, { useState,useEffect } from 'react'
import useStore from '../hooks/useStore';
const SettingForm = observer(() => {
  const { userStore } = useStore()
  const [ name, setName ] = useState('')
  const [ number, setNumber ] = useState(0)
  useEffect(()=>{
    if (userStore.user) {
      setName(userStore.user.name)
      setNumber(userStore.user.number)
    }
  },[userStore.user])
  const nameChange = (e) => {
    setName(e.target.value)
  }
  const numberChange = (e) => {
    const num = e.target.value
    setNumber(num ? Number(num) : null)
  }
  const upNumber = () => {
    setNumber(number + 1)
  }
  const downNumber = () => {
    setNumber(number - 1)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    userStore.setUser({
      name,
      number
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      { userStore.user && 
        <>
          <div>
            <label>이름</label>
            <input
              onChange={nameChange}
              value={name}
            />
          </div>
          <div>
            <label>숫자</label>
            <button type="button" onClick={downNumber}>-</button>
            <input
              type="number"
              onChange={numberChange}
              value={number}
            />
            <button type="button" onClick={upNumber}>+</button>
          </div>
          <div className="center">
            <button type="submit">변경</button>
          </div>
        </>      
      }
    </form>
  )
})

export default SettingForm;