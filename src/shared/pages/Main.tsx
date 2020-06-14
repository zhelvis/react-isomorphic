import React from 'react'
import { Link } from '@reach/router'

import { Head } from '../components/Head'
import { LogoutButton } from '../components/LogoutButton'

const Main: React.FC = () => (
  <>
    <Head title="Главная страница" description="Привет с главной страницы" />
    <h1>Главная</h1>
    <p>Привет с главной страницы!</p>
    <Link to="second">Вторая страница</Link>
    <LogoutButton />
  </>
)

export default Main
