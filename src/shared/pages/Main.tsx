import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

const Main: React.FC = () => (
  <Layout title="Главная страница" description="Привет с главной страницы!">
    <h1>Главная</h1>
    <p>Привет с главной страницы!</p>
    <Link to="/second">Вторая страница</Link>
  </Layout>
)

export default Main
