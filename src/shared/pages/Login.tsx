import React from 'react'

import { Head } from '../components/Head'
import { LoginButton } from '../components/LoginButton'

const Login: React.FC = () => (
  <>
    <Head title="Логин" description="Залогинся!" />
    <p>Логин</p>
    <LoginButton />
  </>
)

export default Login
