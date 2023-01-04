import React from 'react';
import {Link} from "react-router-dom";

import volleyballLogo from "../../Images/Ball.KOB.png"
import "./Nav.css"

export default function Nav() {
  return (
    <nav className='navbar'>
        <div>
            <Link to="/">
                <img src={volleyballLogo} alt="Volleyball" id='vball__logo'/>
            </Link>
        </div>
        <div className='nav__links'>
            <Link to="/" id='nav__link'>Home</Link>
            <Link to="/Project" id='nav__link'>Projects</Link>
            <Link to="/About" id='nav__link'>About</Link>
        </div>
    </nav>
  )
}
