import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../assets/static/css/ReadAll.css'
import woman from '../assets/pics/woman.png'

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
        <ul>
          <Link className='routine-link' to="/routines/1">
            <li className='routine'>Winter Routine</li>
          </Link>
          <Link className='routine-link' to="/routines/2">
            <li className='routine'>Retinol Routine</li>
          </Link>
        </ul>
      </div>
      <img className='woman' src={woman} alt="outline of woman" />
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