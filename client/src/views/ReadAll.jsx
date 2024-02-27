import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ReadAll = () => {
  const [routines, setRoutines] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/routines")
      .then((serverResponse) => {
        console.log("Good to go!", serverResponse.data)
        setRoutines(serverResponse.data)
      })
      .catch(error => console.log("BADBADNOTGOOD!", error))
  }, [])

  return (
    <div>
      <Header headTitle={`SkinRoutine`} />
      {/* <div>{JSON.stringify(routines)}</div> */}

      <p className='list'>List of routines:</p>
      <div>
        <ul className='link-container'>
          <Link className='link' to="/routines/1">
            <li>Winter Routine</li>
          </Link>
          <Link className='link' to="/routines/2">
            <li>Retinol Routine</li>
          </Link>
        </ul>
      </div>
      {routines.map((routine) => {
        return (
          <ul key={routine._id}>
            <li>{routine.title}</li>
            <li>{routine.author}</li>
            <li>{routine.pages}</li>
            <li>{routine.isAvailable ? "Yes" : "No"} | <Link to={`/routines/${routine._id}/update`}>Edit</Link></li>
            <li><Link to={`/routines/${routine._id}`}><button>Routine Details</button></Link></li>
          </ul>)
      })}
      {/* this is the footer that shows the logos */}
      <Footer />
    </div>
  )
}

export default ReadAll