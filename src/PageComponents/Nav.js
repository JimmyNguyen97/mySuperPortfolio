import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Nav() {

  const [ menu, setMenu ] = useState(false)
  function dropDownMenu() {
    setMenu(prevMenu => !prevMenu)
  }
  
  return (
    <div className="nav__container">
      <img
        src={require("../Images/blue green J.png")}
        alt="J - First Initial Logo"
        id="nav_logo"
      />
      <div className="nav__links">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to='/Projects'>Project</Link>
        <Link to="/Resume">Resume</Link>
      </div>
      <div className="drop__container">
        <div id="drop__contents">
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to='/Projects'>Project</Link>
          <Link to="/Resume">Resume</Link>
        </div>
      </div>
      <img 
        src={require("../Images/Youtube-Logo.png")} 
        alt='temp menu logo' 
        onClick={dropDownMenu}
      />
    </div>
  );
}
