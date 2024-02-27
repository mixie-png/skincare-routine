import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'
import '../assets/static/css/Home.css'
import Footer from './Footer'

const Home = () => {

    return (
        <div className='container'>
            <Header headTitle={`SkinRoutine`} />
            <div className='product-list'>
                <Link className='link' to="/routines/products">Product List</Link>
            </div>

            <div className='routine-list'>
                <Link className='link' to="/routines">Routine List</Link>
            </div>

            <img className='girl' src="./src/assets/pics/girl.png" alt="skincare girl" />

            <div className='mantra-container'>
                <p className='mantra'>Mantra of the day:</p>
                <p>“Everything works out for me in my favor!”</p>
            </div>

            <div className='add-container'>
                <Link className='add-routine' to="/create">Add Routine</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Home