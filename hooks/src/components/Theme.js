import React from 'react'

const ThemeState = ({theme, setTheme}) => {
  const handlerChange = (e) => {
    const value = e.target.value
    setTheme(value)
  }
  return (
    <div>
      <span>테마 </span>
      <select value={theme} onChange={handlerChange}>
        <option value='light'>LIGHT
        </option>
        <option value='dark'>DARK
        </option>
      </select>
    </div>
  )
}

export default ThemeState
