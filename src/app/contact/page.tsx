import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <div className="first-fold px-8 md:px-12 xl:px-24">
        <div className="translate-y-60 max-w-5xl bg-white m-auto border-4 rounded-[50px] p-12">
          <h2 className="text-4xl font-bold text-center mb-6 md:mb-12 xl:mb-24">تماس با ما</h2>
          <div className="flex flex-col items-start text-left gap-2 md:gap-4 xl:gap-6">
            <div className="flex items-center gap-4 xl:gap-6 font-bold text-[20px] md:text-[30px] xl:text-[40px]">
              <FaWhatsapp className="w-12 md:w-16 xl:w-24 h-12 md:h-16 xl:h-24 text-[#4f2c25]" />
              <p>WhatsApp: 093722331122</p>
            </div>
            <a
              href="mailto:zibanordic@gmail.com"
              className="flex items-center gap-4 xl:gap-6 font-bold text-[20px] md:text-[30px] xl:text-[40px]"
            >
              <MdOutlineEmail className="w-12 md:w-16 xl:w-24 h-12 md:h-16 xl:h-24 text-[#4f2c25]" />
              <p>zibanordic@gmail.com</p>
            </a>
            <a
              href="https://www.instagram.com/zibanordic/"
              className="flex items-center gap-4 xl:gap-6 font-bold text-[20px] md:text-[30px] xl:text-[40px]"
            >
              <FaInstagram className="w-12 md:w-16 xl:w-24 h-12 md:h-16 xl:h-24 text-[#4f2c25]" />
              <p>@zibanordic</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
