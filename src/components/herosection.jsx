import React from 'react'
import { MdEmail } from "react-icons/md";
import HeroImg from "../assets/profilepic.jpg";

const Herosection = () => {
    return (
        <div class=" justify-center items-center mx-[24px] md:mx-[42px] ">

            <div className="flex flex-col md:flex-row w-full my-[28px] rounded-[10px] 
            justify-items-center justify-center items-center gap-[40px] md:gap-[100px]">
                {/* hero Img  */}
                <img alt="Hero Img" className="rounded-full h-[240px] md:h-[280px] border-2 border-[#B13BFF]  shadow-xl shadow-[#B13BFF]/50 transition-all duration-400" src={HeroImg} />

                {/* hero text  */}
                <div class="flex flex-col text-center md:text-left gap-[14px] ">
                    <span className="flex flex-col gap-[10px] md:gap-0 ">
                        <h2 class="text-[20px] font-semibold text-[#fff] tracking-normal">
                            Hello, I'm
                        </h2>

                        <h1 class="my-[-6px] flex flex-row items-center gap-6 text-[#fff] text-[38px] md:text-[48px] font-semibold tracking-normal leading-none md:leading-14">Pushpendra Vishwakarma</h1>

                        <h2 class="text-[22px] md:text-[24px] font-semibold text-[#B13BFF] tracking-normal">
                            MERN Stack Developer
                        </h2>

                        <p className="max-w-[680px] flex gap-2 text-[16px] md:text-[18px] text-[#fff] tracking-normal mt-[6px] md:mt-[14px]">Transforming ideas into interactive web solutions. Passionate about clean UI. Building scalable web apps with React & Tailwind.</p>

                    </span>

                    {/* Contact me btn  */}
                    <div className=" flex justify-center md:justify-start">

                        <button href="#" title="Let's Connect" class=" px-[14px] py-[8px] rounded-[10px] border-[2px] border-solid border-[#fff]  text-[#fff] text-[18px] font-semibold tracking-normal hover:border-[#090040] hover:text-[#090040] hover:bg-[#B13BFF] transition-all duration-200 ">
                            Contact Me
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Herosection