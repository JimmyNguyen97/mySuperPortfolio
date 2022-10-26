import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <div className="nav__container">
      <img
        src={require("../Images/blue green J.png")}
        alt="J - First Initial Logo"
      />
      <div className="nav__links">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to='/Projects'>Project</Link>
        <Link to="/Resume">
          Resume
        </Link>
      </div>
    </div>
  );
}
