import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const scrollToSection = (e) => {
    window.scrollTo({
      top: e.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav__container">
      <img
        src={require("../Images/blue green J.png")}
        alt="J - First Initial Logo"
      />
      <div className="nav__links">
        <Link to="/Home">Home</Link>
        <a
          href="#About"
          onClick={() => {
            scrollToSection(About);
          }}
        >
          About
        </a>
        <a href="#Project">Project</a>
        <Link to="/Resume" target="_blank">
          Resume
        </Link>
      </div>
    </div>
  );
}
