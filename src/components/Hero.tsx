import Link from "next/link";
import Image from "next/image";
import { SiInstagram, SiGmail } from "react-icons/si"
import {Mail} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <div className="first-fold  bg-cover bg-center bg-no-repeat w-full h-full">
        <div className="flex flex-col items-center sm:items-end gap-8 px-8 sm:px-0 lg:px-20 pt-32 lg:pt-45">
          <h1 className="text-[32px] sm:text-[50px] leading-[1]">ZibaNordic</h1>
          <h3 className=" text-[22px] md:text-[32px] text-creamy-100 ">
            منتخبی از برندهای اصیل جهانی
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] sm:text-right max-w-2xl ">
          در زیبانوردیک  با دقت و وسواس، محصولات آرایشی و بهداشتی
            از معتبرترین برندهای جهانی را انتخاب می‌کنیم و مستقیماً از اروپا به ایران می‌رسانیم
            .اینجا، کیفیت، اصالت و سلامت در اولویت‌اند برای کسانی که زیبایی و سلامتی را جدی می‌گیرند
          </p>
          <Link
            className=" bg-white p-4 rounded-full w-3xs flex items-center justify-center sm:justify-center"
            href="#slider"
          >
            محصولات ما
          </Link>
          {/* <div className="text-3xl flex justify-center items-center gap-4 mt-1 sm:mt-12">
          <a href="mailto:zibanordic@gmail.com">
          <Mail className="w-6 h-6 text-gray-600"/>
            </a>
            <a
              href="https://www.instagram.com/zibanordic/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <SiInstagram className="w-6 h-6 text-gray-600"/>
            </a>

           
          </div> */}
        </div>
      </div>
    </section>
  );
}
