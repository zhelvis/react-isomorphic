import React from 'react'

// eslint-disable-next-line
const noop = () => {}

export interface AuthProviderProps {
  isAuth?: boolean;
}

export const AuthContext = React.createContext({
  auth: false,
  setAuth: noop,
})

export const AuthProvider: React.FC = ({
  isAuth = false,
  children,
}: AuthProviderProps) => {
  const [auth, setAuth] = React.useState(isAuth)

  const context = React.useMemo(() => {
    return {
      auth,
      setAuth,
    }
  }, [auth])

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}
