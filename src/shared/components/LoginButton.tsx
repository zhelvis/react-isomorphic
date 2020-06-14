import React from 'react'
import { useNavigate } from '@reach/router'

import { AuthContext } from './AuthProvider'

export const LoginButton: React.FC = () => {
  const { setAuth } = React.useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = () => {
    fetch('/login', {
      method: 'POST',
    }).then(() => {
      setAuth(true)
      navigate('/')
    })
  }

  return <button onClick={handleLogin}>Login</button>
}
