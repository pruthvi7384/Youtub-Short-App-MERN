import React from 'react'
import './Logo.css'
import LOGO from './logo.png';

function Logo() {
    return (
        <div className="logo d-flex">
            <img className="short__logo" src={LOGO} alt="Youtube Shprts Logo"/>
            <h3>Youtube Shorts</h3>
        </div>
    )
}

export default Logo
