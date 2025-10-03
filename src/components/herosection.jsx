import React from 'react'
import { MdEmail } from "react-icons/md";
import HeroImg from "../assets/My Profile Pic.jpg";

const Herosection = () => {
    return (
        <div class=" justify-items-center  px-[28px] py-[24px] bg-[#090040] ">
            <div className="flex-auto md:flex flex-row w-full my-[28px] px-[120px] py-[24px]  rounded-[10px] 
            justify-center items-center gap-[100px]">
                {/* hero Img  */}
                <img alt="Hero Img" class="rounded-full h-[300px] border-2 border-[#B13BFF]  shadow-xl shadow-[#B13BFF]/50  transition-all duration-400" src={HeroImg} />

                {/* hero text  */}
                <div class="flex flex-col items-start gap-[18px] ">
                    <span className="flex flex-col ">
                        <h2 class="text-[20px] font-semibold text-[#fff] tracking-normal">
                            Hello, I'm
                        </h2>

                        <h1 class="my-[-6px] flex flex-row items-center gap-6 text-[#fff] text-[48px] font-semibold tracking-normal">Pushpendra Vishwakarma</h1>

                        <h2 class="text-[24px] font-semibold text-[#B13BFF] tracking-normal">
                            MERN Stack Developer
                        </h2>
                    </span>

                    <span class="w-auto flex gap-2 text-[16px] text-[#fff] tracking-normal mt-[14px]">
                        <p>Transforming ideas into interactive web solutions. Passionate about clean UI. Building scalable web apps with React & Tailwind.</p>

                    </span>

                    {/* Contact me btn  */}
                    <a href="#" title="Let's Connect" class=" px-[14px] py-[8px] rounded-[10px] border-[2px] border-solid border-[#fff]  text-[#fff] text-[18px] font-semibold tracking-normal hover:border-[#090040] hover:text-[#090040] hover:bg-[#B13BFF] transition-all duration-200 ">
                        Contact Me
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Herosection