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
        <div className=" bg-[#fff] mx-[18px] md:mx-[380px] justify-items-center py-[10px]  mt-[86px] rounded-[10px]">
            {/* Heading */}
            <div>
                <h1 className="text-[34px] md:text-[42px] font-semibold tracking-wide">
                    Let's Connect
                </h1>
            </div>

            {/* Main Form */}
            <div className="w-[300px] md:w-[580px] mt-[18px] md:mt-[24px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
                    <span className="mb-[-4px]">Name</span>
                    <input
                        title="Enter your name here!"
                        type="text"
                        name="name"
                        maxlength="80"
                        placeholder="What's your name?"
                        className="w-full px-[16px] py-[10px] border-2  rounded-[10px] focus:outline-none transition-all duration-300 border-[#d2b4e7] focus:border-[#471396] focus:bg-[#e4e0e8]"
                        required
                    />
                    <span className="mb-[-4px]">Message</span>
                    <textarea
                        title="Tell me how can i help you?"
                        name="message"
                        maxlength="500"
                        placeholder="Hi, let's connect!"
                        className="w-full h-[100px] md:h-[160px]  px-[16px] py-[10px] border-2  rounded-[10px] focus:outline-none transition-all duration-300  border-[#d2b4e7] focus:border-[#471396] focus:bg-[#e4e0e8]"
                        required
                    ></textarea>

                    {/* Send Email */}
                    <span className="flex flex-row justify-end items-center ">
                        <button
                            title="Send email via google!"
                            type="submit"
                            className="flex flex-row items-center mt-[6px] gap-[14px] text-[18px] font-medium border-2  shadow-xl px-[16px] py-[10px] rounded-[10px] w-fit transition-colors duration-300  cursor-pointer border-[#d2b4e7]   hover:bg-[#d2b4e7] "
                        >
                            <MdEmail size={24} />
                            Send Email
                        </button>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Contact;