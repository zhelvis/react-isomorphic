import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

const NotFound: React.FC = () => (
  <Layout title="404" description="Эта страница не существует">
    <h1>404</h1>
    <p>Эта страница не существует</p>
    <Link to="/">Вернуться на главную</Link>
  </Layout>
)

export default NotFound
