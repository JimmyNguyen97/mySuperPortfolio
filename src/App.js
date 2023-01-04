import { Routes, Route } from "react-router-dom";

import Nav from "./PageComponents/Nav/Nav";
import Home from "./PageComponents/Home/Home";
import Project from "./PageComponents/Project/Project";
import About from "./PageComponents/About/About";

import "./App.css";

function App() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
