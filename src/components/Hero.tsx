import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <div className="first-fold">
        <Navbar />
        <div className="main-content flex flex-col-reverse sm:flex-row px-6 justify-center items-center ">
          <div className=" relative  xl:max-w-[800px] lg:px-20">
            <h1 className="text-[36px] sm:text-[64px] md:text-[80px]  leading-[1]  text-[#4f2c25]">
              ZibaNordic
            </h1>
            <h4 className="text-[18px] sm:text-[28px] md:text-[25px] lg:text-[30px] mt-2 text-[#4f2c25] ">
              منتخبی از برندهای اصیل جهانی
            </h4>
            <p className=" mt-12 mb-6   max-w-md">
              در زیبانوردیک، ما زیبایی را اتفاقی نمی‌دانیم. با دقت و وسواس، محصولات آرایشی و بهداشتی
              از معتبرترین برندهای جهانی را انتخاب می‌کنیم و مستقیماً از اروپا به ایران می‌رسانیم.
              اینجا، کیفیت، اصالت و سلامت در اولویت‌اند — برای کسانی که زیبایی و سلامتی را جدی
              می‌گیرند
            </p>
            <Link
              className=" bg-white   p-4 rounded-full  mx-auto w-3xs  flex items-center justify-center sm:justify-center"
              href="#slider"
            >
              محصولات ما
            </Link>
            <div className="text-3xl flex justify-center items-center gap-4 mt-12">
              <a
                href="https://www.instagram.com/zibanordic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="instagram.svg" alt="Instagram" width={40} height={40} />
              </a>

              <a href="mailto:zibanordic@gmail.com">
                <Image src="email.svg" alt="email-icon" width={36} height={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
