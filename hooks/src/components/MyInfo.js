import React from 'react'

const MyInfo = ({user, logout, login,children}) => {
  return (
    <div className="info">
      <div className="center">
        {user ?
          <button onClick={logout}>로그아웃</button>
          :
          <button onClick={login}>로그인</button>
        } 
      </div>
      <div className="userinfo">
        { user &&
          <> 
            <p>이름 {user.name}</p>
            <p>숫자 {user.number}</p>
          </>
        }
      </div>
      {children}
    </div>
  )
}

export default MyInfo