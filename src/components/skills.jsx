import React from "react";
import { useState } from "react";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative, TbPrompt, TbBrandCpp  } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaFigma, FaRobot } from "react-icons/fa6";
import {
    SiJavascript,
    SiTypescript,
    SiExpress,
    SiDjango,
    SiPostgresql,
    SiGit,
    SiNetlify,
    SiReactrouter,
    SiFirebase,
    SiAppwrite,
    SiOpenai,
    SiNotion,
    SiMongodb,
    SiCplusplus 
} from "react-icons/si";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("tab1"); // switch tabs 

    return (
        <div className="text-[#fff] mx-[42px] justify-items-center mt-[86px]">
            {/* Heading */}
            <div className="px-[14px] rounded-[20px] border-b-[2px] border-solid border-[#fff]">
                <h1 className="text-[36px] md:text-[42px] font-semibold tracking-wide ">Skills</h1>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-[46px] mt-[28px]">
                <button
                    onClick={() => setActiveTab("tab1")}
                    className={`flex py-[8px] px-[18px] text-center font-medium rounded-xl border-2 border-[#d2b4e7]/80 transition-all duration-200 hover:border-[#B13BFF] ${activeTab === "tab1"
                        ? "bg-[#B13BFF] text-[#090040] border-[#B13BFF]  font-medium"
                        : "text-[#fff]/80 hover:border-[#d2b4e7]"
                        }`}
                >
                    Frontend
                </button>

                <button
                    onClick={() => setActiveTab("tab2")}
                    className={`flex py-[8px] px-[18px] text-center font-medium rounded-xl border-2 border-[#d2b4e7]/80 transition-all duration-200 hover:border-[#B13BFF] ${activeTab === "tab2"
                        ? "bg-[#B13BFF] text-[#090040] border-[#B13BFF]  font-medium"
                        : "text-[#fff]/80 hover:border-[#d2b4e7]"
                        }`}
                >
                    Backend
                </button>

                <button
                    onClick={() => setActiveTab("tab3")}
                    className={`flex py-[8px] px-[18px] text-center font-medium rounded-xl border-2 border-[#d2b4e7]/80 transition-all duration-200 hover:border-[#B13BFF] ${activeTab === "tab3"
                        ? "bg-[#B13BFF] text-[#090040] border-[#B13BFF]  font-medium"
                        : "text-[#fff]/80 hover:border-[#d2b4e7]"
                        }`}
                >
                    Languages
                </button>

                <button
                    onClick={() => setActiveTab("tab4")}
                    className={`flex py-[8px] px-[18px] text-center font-medium rounded-xl border-2 border-[#d2b4e7]/80 transition-all duration-200 hover:border-[#B13BFF] ${activeTab === "tab4"
                        ? "bg-[#B13BFF] text-[#090040] border-[#B13BFF]  font-medium"
                        : "text-[#fff]/80 hover:border-[#d2b4e7]"
                        }`}
                >
                    Tools
               </button>
            </div>

            {/* Tab Content */}
            <div className=" mt-[28px] p-[50px]">
                {/* Tab-1 */}
                {activeTab === "tab1" && (
                    <div className="flex flex-wrap items-center justify-center gap-[30px]">
                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <FaHtml5  size={28} />
                            HTML
                        </span>

                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <FaCss3Alt size={28} />
                            CSS
                        </span>

                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <FaReact size={28} />
                            React.js
                        </span>

                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <RiTailwindCssFill size={28} />
                            Tailwind CSS
                        </span>

                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <SiJavascript size={28} />
                            JavaScript
                        </span>
                    </div>
                )}

                {/* Tab-2 */}
                {activeTab === "tab2" && (
                    <div className="flex flex-wrap items-center justify-center gap-[30px]">
                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <FaNodeJs size={28} />
                            Node.js
                        </span>

                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <SiExpress size={28} />
                            Express.js
                        </span>

                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <SiMongodb size={28} />
                            MongoDB
                        </span>
                    </div>
                )}

                {/* Tab-3 */}
                {activeTab === "tab3" && (
                    <div className="flex flex-wrap items-center justify-center gap-[30px]">
                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <TbBrandCpp   size={28} />
                            Basic CPP
                        </span>

                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <SiJavascript size={28} />
                            JavaScript
                       </span>
                    </div>
                )}

                {/* Tab-4 */}
                {activeTab === "tab4" && (
                    <div className="flex flex-wrap items-center justify-center gap-[30px]">
                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <FaFigma size={28} />
                            Figma
                        </span>

                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <SiNetlify size={28} />
                            Netlify
                        </span>

                        <span className="flex flex-col items-center gap-[14px] text-[16px] font-medium border-2 border-[#d2b4e7]/80 hover:border-[#B13BFF] shadow-xl hover:shadow-[#B13BFF]/50  px-4 py-[16px] rounded-xl w-[200px] bg-[#fff]/2 hover:text-[#d2b4e7] text-[#fff]/80 hover:scale-101 transition-all duration-300">
                            <VscVscode size={28} />
                            VsCode
                       </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;