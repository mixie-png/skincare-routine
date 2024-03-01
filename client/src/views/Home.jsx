import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import '../assets/static/css/Home.css'
import Footer from './Footer'

const Home = () => {
    const [oneQuote, setOneQuote] = useState(null)

    useEffect(() => {
        axios.get(`https://api.quotable.io/random?maxlength=120`)
            .then((response) => {
                console.log("Good to go!", response.data)
                setOneQuote(response.data)
            })
            .catch(error => console.log("BADBADNOTGOOD!", error))
    }, [])

    return (
        <div className='container'>
            <h1 className='welcome'>Welcome to</h1>
            <Header headTitle={`SkinRoutine`} />

            <div className='links-container'>
                <Link className='link' to="/routines">Routine List</Link>
                <Link className='link' to="/routines/products">Product List</Link>
            </div>

            <img className='girl' src="./src/assets/pics/girl.png" alt="skincare girl" />

            {
                oneQuote !== null ? (
                    <div className='quote-container'>
                        <p className='quote'>Inspirational Quote of the day:</p>
                        <p>"{oneQuote.content}"</p>
                        <p>-{oneQuote.author}</p>
                    </div>
                ) : (
                    <div>
                        <div>Loading...</div>
                    </div>
                )
            }

            <div className='add-container'>
                <Link className='add-routine' to="/routines/create">Add Routine</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Home