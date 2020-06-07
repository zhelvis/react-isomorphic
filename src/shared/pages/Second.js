import React from 'react'
import { Link } from 'react-router-dom'
import { Head } from '../components/Head'

const Second = () => (
  <>
    <Head title="Вторая страница" description="Привет со второй страницы" />
    <h1>Вторая</h1>
    <p>Привет со второй страницы!</p>
    <Link to="/">Вернуться на главную</Link>
  </>
)

export default Second
