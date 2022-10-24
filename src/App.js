import Nav from "./PageComponents/Nav";
import Introduction from "./PageComponents/Introduction";
import About from "./PageComponents/About";
import Projects from "./PageComponents/Projects";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Resume from "./PageComponents/Resume";

function Home() {
  return (
    <>
      <Introduction />
      <About />
      <Projects />
    </>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
