import React from 'react'
import { FaReact } from "react-icons/fa";
import Navbar from './components/navbar';
import Herosection from './components/herosection.jsx'
// import Contact from './pages/contact.jsx'
import Footer from './components/footer.jsx'

const App = () => {
  return (
    <div className="bg-[#090040] ">
      <Navbar />
      <Herosection/>
      {/* <Contact/> */}
      <Footer/>
    </div >
  )
}

export default App
