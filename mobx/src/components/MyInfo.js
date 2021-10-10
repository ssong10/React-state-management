import React from 'react'
import useStore from '../hooks/useStore'
import { observer } from 'mobx-react';

const MyInfo = observer(({children}) => {
  const { userStore } = useStore();
  const login = () => {
    userStore.setUser({
      name: 'tester',
      number: 77,
    })
  }
  const logout = () => {
    userStore.setUser(null)
  }
  return (
    <div className="info">
      <div className="center">
        { userStore.user ?
          <button onClick={logout}>로그아웃</button>
          :
          <button onClick={login}>로그인</button>
        } 
      </div>
      <div className="userinfo">
        { userStore.user &&
          <> 
            <p>이름 {userStore.user.name}</p>
            <p>숫자 {userStore.user.number}</p>
          </>
        }
      </div>
      {children}
    </div>
  )
})

export default MyInfo