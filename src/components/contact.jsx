import { useState } from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const message = e.target.message.value;

        const subject = `Message from ${name}`;
        const body = `Hi, my name is ${name}.\n\n${message}`;

        // Open Gmail compose in new tab with prefilled subject & body
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=pushpendra1.mdl@gmail.com&su=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(body)}`,
            "_blank"
        );
    };

    return (
        <div class=" justify-items-center mt-[4px] px-[128px] py-[80px]  rounded-[10px] ">
            <div className="w-full max-w-[520px] my-[28px] px-[45px] py-[28px] bg-[#fff] rounded-[10px] flex flex-col justify-center items-center">

                <div>
                    <h1 class="text-[38px] text-[#090040] font-semibold tracking-normal">Let's Connect</h1>
                </div>

                <div class="w-full max-w-[450px] mt-[28px]  rounded-[10px]">
                    <form action="" onSubmit={handleSubmit} class=" flex flex-col gap-[10px]">

                        {/* Name */}
                        <label htmlFor="" class="mb-[-4px] text-[#090040]">Name</label>
                        <input type="text" name="name" title="Enter your name here!" class="w-full px-[16px] py-[10px] border-2 border-[#d2b4e7] focus:border-[#471396] rounded-[10px] focus:outline-none transition-all duration-300 focus:bg-[#e4e0e8]" placeholder="Enter your name here!" required />

                        {/* Message */}
                        <label htmlFor="" class="mb-[-4px] text-[#090040]">Message</label>
                        <textarea title="Tell me how can i help you?" name="message" maxlength="500" placeholder="Hi, let's connect!" class="w-full h-[160px] px-[16px] py-[10px] border-2 border-[#d2b4e7] focus:border-[#471396] rounded-[10px] focus:outline-none transition-all duration-300 focus:bg-[#e4e0e8]" required></textarea>


                        {/* Send Email */}
                        <span className="flex flex-row justify-end items-center ">

                            <button title="Send email via google!" type="submit" class=" flex flex-row items-center mt-[6px] gap-[14px] text-[18px] font-medium border-2 border-[#d2b4e7] px-[16px] py-[10px] rounded-[10px] transition-colors duration-300 cursor-pointer  hover:bg-[#d2b4e7] ">
                                Send Email
                                <MdEmail size={22} />
                            </button>

                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact