import React from 'react'
import Navbar from "./components/Navbar"
import Description from "./components/Home"
import About from "./components/About"
import Projects from './components/Projects'
import Contact from "./components/Contact"
import Footer from "./components/footer"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Description /> 
      <About /> 
      <Projects />
      
      
      <Contact /> 
      <Footer />

      
      
    </div>
  );
}

export default App;
