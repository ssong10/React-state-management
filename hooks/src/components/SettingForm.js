import React, { useState } from 'react'

const SettingForm = ({user,setUser}) => {
  const [ userInput, setUserInput ] = useState(user)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(userInput)
  }
  const setName = (name)=> {
    setUserInput({
      ...userInput,
      name
    })
  }
  const setNumber = (number) => {
    console.log(number)
    console.log({
      ...userInput,
      number
    })
    setUserInput({
      ...userInput,
      number
    })
  }
  const numberChange = (e) => {
    const num = e.target.value
    setNumber(num ? Number(num) : '')
  }
  const upNumber = () => {
    setNumber(userInput.number + 1)
  }
  const downNumber = () => {
    setNumber(userInput.number - 1)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름</label>
        <input
          onChange={setName}
          value={userInput.name}
        />
      </div>
      <div>
        <label>숫자</label>
        <button type="button" onClick={downNumber}>-</button>
        <input
          type="number"
          onChange={numberChange}
          value={userInput.number}
        />
        <button type="button" onClick={upNumber}>+</button>
      </div>
      <div className="center">
        <button type="submit">변경</button>
      </div>
    </form>
  );
}

export default SettingForm;