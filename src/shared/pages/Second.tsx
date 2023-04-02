import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

const Second: React.FC = () => (
  <Layout title="Вторая страница" description="Привет со второй страницы">
    <h1>Вторая</h1>
    <p>Привет со второй страницы!</p>
    <Link to="/">Вернуться на главную</Link>
  </Layout>
)

export default Second
