import React from 'react'
import { Link } from 'react-router-dom'
import { Head } from '../components/Head'

const Main = () => (
  <>
    <Head title="Главная страница" description="Привет с главной страницы" />
    <h1>Главная</h1>
    <p>Привет с главной страницы!</p>
    <Link to="/second">Вторая страница</Link>
  </>
)

export default Main
