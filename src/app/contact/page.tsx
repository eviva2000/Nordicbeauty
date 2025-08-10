import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <div className="first-fold">
        <FaWhatsapp  className="w-40 h-40 text-[#4f2c25]"/>
        <MdOutlineEmail className="w-40 h-40 text-[#4f2c25]"/>
        <FaInstagram className="w-40 h-40 text-[#4f2c25]"/>
      </div>
    </section>
  );
}
