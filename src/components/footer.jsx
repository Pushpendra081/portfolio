import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin, FaJs, FaReact, FaNodeJs } from "react-icons/fa6";
import { SiLeetcode, SiMongodb, SiExpress } from "react-icons/si";
import { FaInstagram, FaCloudDownloadAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Footer = () => {
    return (

        <footer className=" flex justify-center rounded-t-[18px] border-2 bg-[#fff]/10 backdrop-blur-2xl">
            <div class=" my-[24px]  grid grid-cols-1 md:grid-cols-4 gap-2 justify-center ">
                {/* name footer */}
                <div className=" mt-[10px]">
                    <h1 class="text-[22px] md:text-[26px] text-[#fff] font-semibold cursor-default  text-center md:text-left">Pushpendra Vishwakarma</h1>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-row justify-center ">
                    <span class="flex flex-col gap-[8px]">
                        <h1 class="text-[16px] md:text-[18px] text-[#fff] font-bold cursor-default text-center md:text-left">Tech Stack
                        </h1>
                        <span title="Tech Stack" class="flex flex-row gap-[16px] px-[14px] py-[8px] rounded-[10px] border-b-[2px] border-solid border-[#fff]  text-[#fff] font-semibold tracking-normal transition-colors duration-400 ">
                            {/* Java Script */}
                            <a href="#" title="Java Script" className="transition-all duration-200 ease-in-out hover:scale-115" >
                                <FaJs size={18} />
                            </a>
                            {/* Tailwind Css */}
                            <a href="#" title="Tailwind Css" className="transition-all duration-200 ease-in-out hover:scale-115" >
                                <RiTailwindCssFill size={18} />
                            </a>
                            {/* React Js */}
                            <a href="#" title="React Js" className="transition-all duration-200 ease-in-out hover:scale-115" >
                                <FaReact size={18} />
                            </a>
                            {/* Node Js */}
                            <a href="#" title="Node Js" className="transition-all duration-200 ease-in-out hover:scale-115" >
                                <FaNodeJs size={18} />
                            </a>
                            {/* Mongo DB */}
                            <a href="#" title="Mongo DB" className="transition-all duration-200 ease-in-out hover:scale-115" >
                                <SiMongodb size={18} />
                            </a>
                            {/* Express Js */}
                            <a href="#" title="Express Js" className="transition-all duration-200 ease-in-out hover:scale-115" >
                                <SiExpress size={18} />
                            </a>
                        </span>
                    </span>
                </div>

                {/* Social Link's */}
                <div className="mt-4 flex flex-row justify-center text-[#fff]">
                    <span class="flex flex-col gap-[8px]">
                        <h1 class="text-[16px] md:text-[18px] text-[#fff] font-bold cursor-default text-center md:text-left">Social Link's
                        </h1>
                        <span title="Social Link's" class="flex flex-row gap-[16px] px-[14px] py-[8px] rounded-[10px] border-b-[2px] border-solid border-[#fff]  text-[#fff] font-semibold tracking-normal transition-colors duration-400 ">
                            {/* Github */}
                            <a href="https://github.com/Pushpendra081" target="_blank" title="Github" className="transition-all duration-200 ease-in-out hover:scale-115" >
                                <IoLogoGithub size={18} />
                            </a>
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/pushpendravishwakarma" target="_blank" title="Linkedin" className=" transition-all duration-200 ease-in-out hover:scale-115" >
                                <FaLinkedin size={18} />
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/pushpendra_vk_081" target="_blank" title="Instagram" className=" transition-all duration-200 ease-in-out hover:scale-115" >
                                <FaInstagram size={18} />
                            </a>
                            {/* Leetcode */}
                            <a href="https://leetcode.com/" target="_blank" title="Leetcode" className=" transition-all duration-200 ease-in-out hover:scale-115" >
                                <SiLeetcode size={18} />
                            </a>
                        </span>
                    </span>
                </div>

                {/* Download CV */}
                <div className="mt-6 md:mt-4 flex flex-row justify-center text-[#fff]">
                    <span class="flex flex-col gap-[8px]">
                        <a title="Download CV" href="src\assets\Pushpendra Vishwakarma CV.pdf" download class=" px-[12px] py-[6px] rounded-[10px] border-[2px] border-solid border-[#fff]  text-[#fff] text-[18px] font-semibold tracking-normal hover:border-[#090040] hover:text-[#090040] hover:bg-[#B13BFF] transition-all duration-200 flex justify-center items-center gap-[4px] ">
                            Download CV
                            <FaCloudDownloadAlt size={18} />
                        </a>
                    </span>
                </div>

                {/* copyrighted */}
                <div className="mt-[16px] md:mt-[-34px] flex flex-row ">
                    <p className="text-[#d2b4e7] text-[12px] md:text-[14px] w-[350px] text-center md:text-left">© 2025 Pushpendra Vishwakarma — Knowledge grows when shared, not copyrighted.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
