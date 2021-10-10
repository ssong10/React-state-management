import React from 'react'
import { observer } from 'mobx-react';
import useStore from './hooks/useStore';
import MyInfo from './components/MyInfo'
import SettingForm from './components/SettingForm'
import Theme from './components/Theme'
import './App.css';

const App = observer(() => {
  const { themeStore } = useStore()
  return (
    <div id="main" className={themeStore.theme} >
      <MyInfo>
        <Theme></Theme>
      </MyInfo>
      <div className="setting">
        <div className="center">
          <h2>회원 정보 수정</h2>
        </div>
        <SettingForm />        
      </div>
    </div>
  );
})

export default App;
