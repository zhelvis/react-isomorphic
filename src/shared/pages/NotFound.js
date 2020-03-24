import React from 'react'
import { Link } from '@reach/router'
import { Head } from '../components/Head'

const NotFound = () => (
  <>
    <Head title="404" description="Эта страница не существует" />
    <h1>404</h1>
    <p>Эта страница не существует</p>
    <Link to="/">Вернуться на главную</Link>
  </>
)

export default NotFound
