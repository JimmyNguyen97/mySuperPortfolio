import Nav from "./PageComponents/Nav";
import Introduction from "./PageComponents/Introduction";
import About from "./PageComponents/About";
import Projects from "./PageComponents/Projects";
import PageNotFound from "./PageComponents/NotFound";

import { Routes, Route } from "react-router-dom";

import "./App.css";
// import Resume from "./PageComponents/Resume";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/mySuperPortfolio" element={<Introduction />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="/Resume" element={<Resume />} /> */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
