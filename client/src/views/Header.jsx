import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const { headTitle } = props
  return (
    <>
      <h1>{headTitle}</h1>
      <p>
        <Link className='link' to="/">Catalog</Link>
      </p>
      <p>
        <Link className='link' to="/create">Add Routine</Link>
      </p>
    </>
  )
}

export default Header