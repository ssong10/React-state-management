import { observer } from 'mobx-react';
import React from 'react'
import useStore from '../hooks/useStore';

const ThemeState = observer(() => {
  const { themeStore } = useStore()
  const handlerChange = (e) => {
    const value = e.target.value
    themeStore.setTheme(value)
  }
  return (
    <div>
      <span>테마 </span>
      <select value={themeStore.theme} onChange={handlerChange}>
        <option value='light'>LIGHT
        </option>
        <option value='dark'>DARK
        </option>
      </select>
    </div>
  )
})

export default ThemeState
