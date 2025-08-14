import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <div className="first-fold">
        <div className="flex flex-col items-center gap-12 lg:px-20 pt-32 lg:pt-48">
          <h1 className="text-[22px] md:text-[32px]  leading-[1]  text-[#4f2c25]">ZibaNordic</h1>
          <h3 className="text-[32px] sm:text-[44px] md:text-[52px] mt-2 text-creamy-100 ">
            منتخبی از برندهای اصیل جهانی
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px]  px-8 xs:px-12 sm:px-16 max-w-2xl ">
            در زیبانوردیک، ما زیبایی را اتفاقی نمی‌دانیم. با دقت و وسواس، محصولات آرایشی و بهداشتی
            از معتبرترین برندهای جهانی را انتخاب می‌کنیم و مستقیماً از اروپا به ایران می‌رسانیم.
            اینجا، کیفیت، اصالت و سلامت در اولویت‌اند. برای کسانی که زیبایی و سلامتی را جدی می‌گیرند
          </p>
          <Link
            className=" bg-white   p-4 rounded-full  mx-auto w-3xs  flex items-center justify-center sm:justify-center"
            href="#slider"
          >
            محصولات ما
          </Link>
          <div className="text-3xl flex justify-center items-center gap-4 mt-1 sm:mt-12">
          <a href="mailto:zibanordic@gmail.com">
              <Image
                src="email.svg"
                alt="email-icon"
                width={36}
                height={36}
                className="w-16 h-16 "
              />
            </a>
            <a
              href="https://www.instagram.com/zibanordic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
                className="w-16 h-16"
              />
            </a>

           
          </div>
        </div>
      </div>
    </section>
  );
}
