// /src/pages/LoginPage.js
import React from 'react'
import Login from '../components/Login'
import { useSelector } from 'react-redux'

const LoginPage = () => {
  const { token } = useSelector((state) => state.user)
  return (
    <div>
      {token ? (
        <>
          <h1 className="text-2xl text-center mt-8">
            You are already logged in
          </h1>
          <h2 className="text-2xl text-center mt-8">
            Please clear your Local Storage to log in as a different user
          </h2>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default LoginPage
