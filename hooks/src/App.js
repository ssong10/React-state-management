import React, {useState} from 'react'
import MyInfo from './components/MyInfo'
import SettingForm from './components/SettingForm'
import Theme from './components/Theme'
import './App.css';

function App() {
  const [ user, setUser ] = useState(null)
  const [ theme, setTheme ] = useState('light')
  const [ isLogin, setIsLogin] = useState(false)

  const login = () => {
    setUser({
      name: 'tester',
      number: 77,
    })
    setIsLogin(true)
  }
    const logout = () => {
    setUser(null)
    setIsLogin(false)
  }

  return (
    <div id="main" className={theme} >
      <MyInfo
        user={user}
        isLogin={isLogin}
        login={login}
        logout={logout}
      >
        <Theme
          theme={theme}
          setTheme={setTheme}
        ></Theme>
      </MyInfo>
      <div className="setting">
        <div className="center">
          <h2>회원 정보 수정</h2>
        </div>
        {user && 
          <SettingForm
            user={user}
            setUser={setUser}
          />        
        }
      </div>
    </div>
  );
}

export default App;
