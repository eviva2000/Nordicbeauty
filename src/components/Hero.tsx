
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <Navbar />
      <div className="main-content flex flex-col items-end px-6">
        <div className=" relative mt-30 md:mt-48 lg:mt-64  xl:max-w-[800px] lg:px-20">
          <h1 className="text-[36px] sm:text-[64px] md:text-[90px]  leading-[1]  text-[#2f4f4f] text-center sm:text-right">
            ZibaNordic
          </h1>
          <h4 className="text-[18px] sm:text-[28px] md:text-[25px] lg:text-[30px] mt-2 text-[#2f4f4f] text-center sm:text-right">
            منتخبی از برندهای اصیل جهانی
          </h4>
          <p className="text-right text-[#2f4f4f] mt-12 mb-6   max-w-md">
            در زیبانوردیک، ما زیبایی را اتفاقی نمی‌دانیم. با دقت و وسواس، محصولات آرایشی و بهداشتی
            از معتبرترین برندهای جهانی را انتخاب می‌کنیم و مستقیماً از اروپا به ایران می‌رسانیم.
            اینجا، کیفیت، اصالت و سلامت در اولویت‌اند — برای کسانی که زیبایی را جدی می‌گیرند
          </p>
          <Link  href='https://www.instagram.com/zibanordic/'><div className="flex items-center justify-center sm:justify-end text-[#2f4f4f]"> ما را در اینستاگرام دنبال کنید <img className="instagram-logo" alt="" src='/New Project (1).svg'/></div> </Link>
        </div>
      </div>

      <div className="hidden lg:block absolute lg:-top-60 lg:-left-60 2xl:-top-48 2xl:-left-48 bg-[#e6c5aa] w-[500px] h-[500px] rounded-full" />

    </section>
  );
}
