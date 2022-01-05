import React from 'react'
import logo from '../images/nasa.jpg'

export const Headers = () => {
    return (
        <div className='mainBar'>
            <img id='logo' src={logo} alt='nasalogo'></img>
            <h1>NASA Meteorite Data</h1>
        </div>
    )
}
