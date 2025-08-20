import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiInstagram } from "react-icons/si"


const ContactSplitScreen = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-white">
      <div className="w-full md:w-2/3 h-1/2 md:h-full ">
        <div className="relative w-full h-full">
          <Image
            src="/contact.svg"
            alt="Floral arrangement"
            className="w-full h-full "
            width={600}
            height={600}
          />
        </div>
      </div>

      <div
        className="w-full md:w-1/3 h-1/2 md:h-full flex flex-col justify-end items-start p-8 text-white bg-[#2f4f4f]"
      >
        <div className="max-w-md ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left contact">CONTACT US</h1>
          <div className="flex flex-col items-start text-left gap-4 md:gap-4">
          <a
              href="https://www.instagram.com/zibanordic/"
              className="flex items-center gap-4 font-bold text-[20px] md:text-[30px] "
            >
              <SiInstagram className="w-10 h-10" />
              <p className="text-sm md:text-xl ">@nordicbeauty</p>
            </a>
           
            <a
              href="mailto:zibanordic@gmail.com"
              className="flex items-center gap-4 font-bold text-[20px] md:text-[30px] "
            >
              <MdOutlineEmail className="w-11 h-11" />
              <p className="text-sm md:text-xl ">nordicbeauty@gmail.com</p>
            </a>
            <div className="flex items-center gap-4  font-bold text-[20px] md:text-[30px] ">
              <FaWhatsapp className="w-12 h-12" />
              <p className="text-sm md:text-xl ">WhatsApp: 045722331122</p>
            </div>

          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ContactSplitScreen;

