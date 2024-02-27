import React from 'react'
import '../assets/static/css/Header.css'


const Header = (props) => {
  const { headTitle } = props
  return (
    <>
      <h1>{headTitle}</h1>
    </>
  )
}

export default Header