import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'
import '../assets/static/css/Home.css'
import Footer from './Footer'

const Home = () => {
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
        <div className='container'>
            {/* <div>{JSON.stringify(routines)}</div> */}
            <Header headTitle={`SkinRoutine`} />
            <div className='product-list'>
                <Link className='link' to="/routines/products">My Product List</Link>
            </div>
            <img className='girl' src="./src/assets/pics/girl.png" alt="skincare girl" />
            <p>List of routines:</p>
            <ul className='link-container'>
                <Link className='link' to="/routines/1">
                    <li>Winter Routine</li>
                </Link>
                <Link className='link' to="/routines/2">
                    <li>Retinol Routine</li>
                </Link>
            </ul>
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
            <div className='add-container'>
                <Link className='add-routine' to="/create">Add Routine</Link>
            </div>
            {/* this is the footer that shows the logos */}
            {/* this is the footer that shows the logos */}
            {/* this is the footer that shows the logos */}
            <Footer></Footer>
        </div>
    )
}

export default Home