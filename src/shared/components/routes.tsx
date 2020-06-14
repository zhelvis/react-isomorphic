import React from 'react'
import { Redirect } from '@reach/router'
import { AuthContext } from './AuthProvider'

export interface CustomRouteProps {
  component: React.ReactType;
}

export const ProtectedRoute: React.FC = ({
  component: Component,
  ...rest
}: CustomRouteProps) => {
  const { auth } = React.useContext(AuthContext)
  return auth ? <Component {...rest} /> : <Redirect to="/login" noThrow />
}

export const PublicRoute: React.FC = ({
  component: Component,
  ...rest
}: CustomRouteProps) => <Component {...rest} />
