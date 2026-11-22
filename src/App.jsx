import React from "react";
import "./App.css";
import Navbar from "./components/NavbarTop.jsx";
import Home from "./components/HomePage.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Analytics from "./components/Analytics.jsx";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Analytics />
        
      </main>
      
    </>
  );
}

export default App;