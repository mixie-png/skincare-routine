import React from 'react'
import '../assets/static/css/Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <div className='flex'>
                <img className='home-icon' src="./src/assets/pics/home.png" alt="home"/>
                <img className='routine-icon' src="./src/assets/pics/routine.png" alt="routine" />
                <img className='personal-hygiene-icon' src="./src/assets/pics/personal-hygiene.png" alt="personal-hygiene" />
                <img className='setting-icon' src="./src/assets/pics/setting.png" alt="setting" />
            </div>
        </div>
    )
}

export default Footer