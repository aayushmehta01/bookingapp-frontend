import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import Header from '../../components/header/Header.jsx'
import './List.css'

const List = () => {
  return (
    <div>
      <Navbar type="list"/>
      <Header type="list"/>
    </div>
  )
}

export default List