import React from 'react'
import '../assets/static/css/Footer.css'
import home from '../assets/pics/home.png'
import products from '../assets/pics/products.png'
import routine from '../assets/pics/routine.png'
import setting from '../assets/pics/setting.png'

const Footer = () => {
    return (
        <div>
            <div className='flex'>
                <img className='home-icon' src={home} alt="home"/>
                <img className='routine-icon' src={routine} alt="routine" />
                <img className='personal-hygiene-icon' src={products} alt="products" />
                <img className='setting-icon' src={setting} alt="setting" />
            </div>
        </div>
    )
}

export default Footer