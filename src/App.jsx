import React from 'react'
import { FaReact } from "react-icons/fa";
import Navbar from './components/navbar';
import Herosection from './components/herosection.jsx'
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'

const App = () => {
  return (
    <div className="bg-[#090040] ">
      <Navbar />
      <Herosection/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div >
  )
}

export default App
