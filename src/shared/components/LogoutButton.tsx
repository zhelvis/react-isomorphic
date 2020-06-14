import React from 'react'

import { AuthContext } from './AuthProvider'

export const LogoutButton: React.FC = () => {
  const { setAuth } = React.useContext(AuthContext)

  const handleLogout = () => {
    fetch('/logout', {
      method: 'POST',
    }).then(() => {
      setAuth(false)
    })
  }

  return <button onClick={handleLogout}>Logout</button>
}
