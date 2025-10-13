import React, { useState, useEffect } from "react";

// Icons ----------------------------------
import { FaArrowCircleUp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative, TbPrompt } from "react-icons/tb";
import { FaReact, FaNodeJs, FaPython, FaFigma, FaRobot } from "react-icons/fa6";
import {
    SiGit,
    SiGithub,
    SiJavascript,
    SiTypescript,
    SiDjango,
    SiExpress,
    SiPostgresql,
    SiReactrouter,
    SiNetlify,
    SiFirebase,
    SiAppwrite,
    SiOpenai,
    SiNotion,
    SiMongodb,
} from "react-icons/si";

// Images ---------------------------------
import Img1 from "../assets/fintotypefirst.webp";
import Img2 from "../assets/fintotypefirst.webp";
import Img3 from "../assets/fintotypefirst.webp";

const Projects = () => {
    const [activeTab, setActiveTab] = useState("tab1"); // switch tabs
    const [current, setCurrent] = useState(0);

    // Image Import -------------------------
    const images = [Img1, Img2, Img3];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000); // change every 4 sec
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="text-[#fff] mx-[42px] justify-items-center mt-[86px]">
            {/* Heading */}
            <div className="px-[14px] rounded-[20px] border-b-[2px] border-solid border-[#fff]">
                <h1 className="text-[42px] font-semibold tracking-wide ">Projects</h1>
            </div>

            {/*  Content */}
            <div className="p-[50px]">

                <div className="flex flex-wrap items-center justify-center gap-[30px]">
                    {/* FeProject 1 */}
                    <div>
                        {/* Carousel */}
                        <div className="bg-[#fff]/10 px-1 py-1  w-[320px] border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50 rounded-xl text-[#fff] hover:scale-101 transition-all duration-300">
                            <div className="relative w-full h-60 rounded-[8px] overflow-hidden">
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt="carousel"
                                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col justify-center items-center mt-[8px] px-[10px]">
                                <h1 className="text-[24px] font-semibold">Finotype</h1>
                                <p className="text-[#fff]/80 mt-[6px] px-[8px] h-[94px] text-justify font-normal transition-colors duration-300 text-[14.8px]">
                                    This is a demo of the feature i have added here and i will
                                    implement this to others too
                                </p>
                                <div className="flex text-start  items-center w-full">
                                    <span className="flex flex-row gap-[10px] px-[8px] py-[6px] rounded-[10px] border-b-[2px] border-solid border-[#fff]  text-[#fff]">
                                        <FaReact />
                                        <SiTypescript />
                                        <SiMongodb />
                                        <SiNetlify />
                                        <SiAppwrite />
                                        <FaFigma />
                                    </span>
                                </div>
                                <div className="w-full flex justify-between items-center gap-[10px] mt-[18px] mb-[5px] font-medium">
                                    <a
                                        href="#"
                                        className="flex flex-row items-center gap-[10px] bg-[#471396]  px-[10px] py-[6px] transition-colors duration-200 text-[14px]  rounded-[10px] border-[2px] border-solid border-[#fff]/10  text-[#fff] font-semibold tracking-normal hover:border-[#090040]/50 hover:text-[#090040] hover:bg-[#B13BFF]"
                                    >
                                        Code
                                        <SiGithub size={14} />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex flex-row items-center gap-[10px] bg-[#471396]  px-[10px] py-[6px] transition-colors duration-200 text-[14px]  rounded-[10px] border-[2px] border-solid border-[#fff]/10  text-[#fff] font-semibold tracking-normal hover:border-[#090040]/50 hover:text-[#090040] hover:bg-[#B13BFF]"
                                    >
                                        Demo
                                        <FaArrowCircleUp size={14.5} className="rotate-45" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FeProject 2 */}
                    <div>
                        {/* Carousel */}
                        <div className="bg-[#fff]/10 px-1 py-1  w-[320px] border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50 rounded-xl text-[#fff] hover:scale-101 transition-all duration-300">
                            <div className="relative w-full h-60 rounded-[8px] overflow-hidden">
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt="carousel"
                                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col justify-center items-center mt-[8px] px-[10px]">
                                <h1 className="text-[24px] font-semibold">Finotype</h1>
                                <p className="text-[#fff]/80 mt-[6px] px-[8px] h-[94px] text-justify font-normal transition-colors duration-300 text-[14.8px]">
                                    This is a demo of the feature i have added here and i will
                                    implement this to others too
                                </p>
                                <div className="flex text-start  items-center w-full">
                                    <span className="flex flex-row gap-[10px] px-[8px] py-[6px] rounded-[10px] border-b-[2px] border-solid border-[#fff]  text-[#fff]">
                                        <FaReact />
                                        <SiTypescript />
                                        <SiMongodb />
                                        <SiNetlify />
                                        <SiAppwrite />
                                        <FaFigma />
                                    </span>
                                </div>
                                <div className="w-full flex justify-between items-center gap-[10px] mt-[18px] mb-[5px] font-medium">
                                    <a
                                        href="#"
                                        className="flex flex-row items-center gap-[10px] bg-[#471396]  px-[10px] py-[6px] transition-colors duration-200 text-[14px]  rounded-[10px] border-[2px] border-solid border-[#fff]/10  text-[#fff] font-semibold tracking-normal hover:border-[#090040]/50 hover:text-[#090040] hover:bg-[#B13BFF]"
                                    >
                                        Code
                                        <SiGithub size={14} />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex flex-row items-center gap-[10px] bg-[#471396]  px-[10px] py-[6px] transition-colors duration-200 text-[14px]  rounded-[10px] border-[2px] border-solid border-[#fff]/10  text-[#fff] font-semibold tracking-normal hover:border-[#090040]/50 hover:text-[#090040] hover:bg-[#B13BFF]"
                                    >
                                        Demo
                                        <FaArrowCircleUp size={14.5} className="rotate-45" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* FeProject 3 */}
                    <div>
                        {/* Carousel */}
                        <div className="bg-[#fff]/10 px-1 py-1  w-[320px] border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50 rounded-xl text-[#fff] hover:scale-101 transition-all duration-300">
                            <div className="relative w-full h-60 rounded-[8px] overflow-hidden">
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt="carousel"
                                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col justify-center items-center mt-[8px] px-[10px]">
                                <h1 className="text-[24px] font-semibold">Finotype</h1>
                                <p className="text-[#fff]/80 mt-[6px] px-[8px] h-[94px] text-justify font-normal transition-colors duration-300 text-[14.8px]">
                                    This is a demo of the feature i have added here and i will
                                    implement this to others too
                                </p>
                                <div className="flex text-start  items-center w-full">
                                    <span className="flex flex-row gap-[10px] px-[8px] py-[6px] rounded-[10px] border-b-[2px] border-solid border-[#fff]  text-[#fff]">
                                        <FaReact />
                                        <SiTypescript />
                                        <SiMongodb />
                                        <SiNetlify />
                                        <SiAppwrite />
                                        <FaFigma />
                                    </span>
                                </div>
                                <div className="w-full flex justify-between items-center gap-[10px] mt-[18px] mb-[5px] font-medium">
                                    <a
                                        href="#"
                                        className="flex flex-row items-center gap-[10px] bg-[#471396]  px-[10px] py-[6px] transition-colors duration-200 text-[14px]  rounded-[10px] border-[2px] border-solid border-[#fff]/10  text-[#fff] font-semibold tracking-normal hover:border-[#090040]/50 hover:text-[#090040] hover:bg-[#B13BFF]"
                                    >
                                        Code
                                        <SiGithub size={14} />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex flex-row items-center gap-[10px] bg-[#471396]  px-[10px] py-[6px] transition-colors duration-200 text-[14px]  rounded-[10px] border-[2px] border-solid border-[#fff]/10  text-[#fff] font-semibold tracking-normal hover:border-[#090040]/50 hover:text-[#090040] hover:bg-[#B13BFF]"
                                    >
                                        Demo
                                        <FaArrowCircleUp size={14.5} className="rotate-45" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;