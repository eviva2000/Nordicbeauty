import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiInstagram } from "react-icons/si"

export default function Contact() {
  return (
    <section className="relative w-screen h-[calc(100vh-250px)] md:h-[calc(100vh-150px)]">
      <div className="first-fold-contact px-8 md:px-24 lg:px-32 flex">
        <div className="flex flex-col items-center  max-w-5xl m-auto border-4 rounded-[50px] p-10 sm:p-22 xl:pt-16">
          <h2 className="text-xl xl:text-4xl font-bold text-center mb-6 md:mb-12 xl:mb-24">
            تماس با ما
          </h2>
          <div className="flex flex-col items-start text-left gap-4 md:gap-6 xl:gap-8">
            <div className="flex items-center gap-4 xl:gap-6 font-bold text-[20px] md:text-[30px] xl:text-[40px]">
              <FaWhatsapp className="w-12 md:w-16 xl:w-24 h-12 md:h-16 xl:h-24 text-[#2f4f4f]" />
              <p className="text-sm md:text-xl xl:text-4xl">WhatsApp: 093722331122</p>
            </div>
            <a
              href="mailto:zibanordic@gmail.com"
              className="flex items-center gap-4 xl:gap-6 font-bold text-[20px] md:text-[30px] xl:text-[40px]"
            >
              <MdOutlineEmail className="w-12 md:w-16 xl:w-24 h-12 md:h-16 xl:h-24 text-[#2f4f4f]" />
              <p className="text-sm md:text-xl xl:text-4xl">zibanordic@gmail.com</p>
            </a>
            <a>
            <SiInstagram/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
