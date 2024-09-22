// /src/pages/SignupPage.js
import React from 'react'
import Signup from '../components/Signup'
import { useSelector } from 'react-redux'

const SignupPage = () => {
  const { token } = useSelector((state) => state.user)
  return (
    <div>
      {token ? (
        <>
          <h1 className="text-2xl text-center mt-8">
            You are already logged in
          </h1>
          <h2 className="text-2xl text-center mt-8">
            Please clear your Local Storage to sign up as a different user
          </h2>
        </>
      ) : (
        <Signup />
      )}
    </div>
  )
}

export default SignupPage
