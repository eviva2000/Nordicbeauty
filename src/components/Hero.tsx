
import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";
import Slider from "./Slider/Slider";
import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

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
          <h4 className="text-[18px] sm:text-[28px] md:text-[25px] lg:text-[30px] mt-2 ">
            منتخبی از برندهای اصیل جهانی
          </h4>
          <p className=" mt-12 mb-6   max-w-md">
            در زیبانوردیک، ما زیبایی را اتفاقی نمی‌دانیم. با دقت و وسواس، محصولات آرایشی و بهداشتی
            از معتبرترین برندهای جهانی را انتخاب می‌کنیم و مستقیماً از اروپا به ایران می‌رسانیم.
            اینجا، کیفیت، اصالت و سلامت در اولویت‌اند — برای کسانی که زیبایی و سلامتی را جدی می‌گیرند
          </p>
          <Link className=" bg-white   p-4 rounded-full  mx-auto w-3xs  flex items-center justify-center sm:justify-center" href='https://www.instagram.com/zibanordic/'>ما را در اینستاگرام دنبال کنید </Link>
        </div>
     
      </div>
      </div>
        <div style={{ marginTop:'15rem'}}>
          <Slider slides={SLIDES} options={OPTIONS}>
            {SLIDES.map((index) => (
              <div className="embla__slide" key={index}>
                <Image
                  className="embla__slide__img"
                  src={`/test${index + 1}.jpg`}
                  alt="slider image"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </Slider>
         
          
          </div>

<footer style={{height:'20vh',background:'gray'}}> Placeholder for footer</footer>
    </section>
  );
}


// mt-30 md:mt-48 lg:mt-64