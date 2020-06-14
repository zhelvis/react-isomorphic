import React from 'react'
import { Link } from '@reach/router'

import { Head } from '../components/Head'
import { LogoutButton } from '../components/LogoutButton'

const Second: React.FC = () => (
  <>
    <Head title="Вторая страница" description="Привет со второй страницы" />
    <h1>Вторая</h1>
    <p>Привет со второй страницы!</p>
    <Link to="../">Вернуться на главную</Link>
    <LogoutButton />
  </>
)

export default Second
