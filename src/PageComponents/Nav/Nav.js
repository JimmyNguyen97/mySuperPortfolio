import React from 'react';
import {Link} from "react-router-dom";

import pageLogo from "../../Images/pageLogo.png"
import "./Nav.css"

export default function Nav() {
  return (
    <nav className='navbar'>
        <div>
            <Link to="/Portfolio">
                <img src={pageLogo} alt="Initials__Logo" id='page__logo'/>
            </Link>
        </div>
        <div className='nav__links'>
            <Link to="/Portfolio" id='nav__link'>Home</Link>
            <Link to="/Project" id='nav__link'>Projects</Link>
            <Link to="/About" id='nav__link'>About</Link>
        </div>
    </nav>
  )
}
