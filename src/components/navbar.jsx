import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar" className=" max-w-full sticky top-0 z-50 backdrop-blur-2xl ">
      <div className="mx-[42px] flex justify-between items-center">
        {/* Heading */}
        <div className="h-[68px] flex flex-row items-center ">
          <span className="flex flex-row items-center">
            <h1 className="text-center text-[#fff] text-2xl font-bold cursor-default">PORTFOLIO</h1>
          </span>
        </div>

        {/* Desktop Menu */}
        <div class="hidden md:flex flex-row font-medium gap-[42px] items-center text-[#fff]">
          <a href="#" class="hover:underline underline-offset-2">About</a>
          <a href="#" class="hover:underline underline-offset-2">Skills</a>
          <a href="#" class="hover:underline underline-offset-2">Projects</a>
          <a href="#" class="hover:underline underline-offset-2">Contact</a>

            {/* Github */}
          
            <a href="https://github.com/Pushpendra081" title="GitHub" target="_blank" class=" px-[12px] py-[6px] rounded-[10px] border-[2px] border-solid border-[#fff]  text-[#fff] text-[18px] font-semibold tracking-normal hover:border-[#090040] hover:text-[#090040] hover:bg-[#B13BFF] transition-all duration-200 flex justify-center items-center gap-[4px] ">
              Github
              <IoLogoGithub size={20} />
            </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center text-[#fff]">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" md:hidden flex flex-col items-center gap-4 pb-4 font-medium text-[#fff]">
          <a href="#" onClick={() => setIsOpen(false)} className="hover:underline">About</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:underline">Skills</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:underline">Projects</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:underline">Contact</a>
           <a href="https://github.com/Pushpendra081" title="GitHub" target="_blank" class=" px-[12px] py-[6px] rounded-[10px] border-[2px] border-solid border-[#fff]  text-[#fff] text-[18px] font-semibold tracking-normal hover:border-[#090040] hover:text-[#090040] hover:bg-[#B13BFF] transition-all duration-200 flex justify-center items-center gap-[4px] ">
              Github
              <IoLogoGithub size={20} />
            </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
