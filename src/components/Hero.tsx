
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
      <Navbar />
      <div className="main-content flex flex-col-reverse sm:flex-row px-6 justify-center items-center ">
      <div>
          <Image alt='flowers' src='/main-circle-with-flowers.svg' width={500} height={500}/>
      </div>
        <div className=" relative  xl:max-w-[800px] lg:px-20">
          <h1 className="text-[36px] sm:text-[64px] md:text-[80px]  leading-[1]  text-[#2f4f4f] text-center sm:text-right">
            ZibaNordic
          </h1>
          <h4 className="text-[18px] sm:text-[28px] md:text-[25px] lg:text-[30px] mt-2 text-[#2f4f4f] text-center sm:text-right">
            منتخبی از برندهای اصیل جهانی
          </h4>
          <p className="text-right text-[#2f4f4f] mt-12 mb-6   max-w-md">
            در زیبانوردیک، ما زیبایی را اتفاقی نمی‌دانیم. با دقت و وسواس، محصولات آرایشی و بهداشتی
            از معتبرترین برندهای جهانی را انتخاب می‌کنیم و مستقیماً از اروپا به ایران می‌رسانیم.
            اینجا، کیفیت، اصالت و سلامت در اولویت‌اند — برای کسانی که زیبایی و سلامتی را جدی می‌گیرند
          </p>
          <Link className="flex justify-end" href='https://www.instagram.com/zibanordic/'><div className="border border-inherit border-solid p-4 rounded-full  mx-auto sm:mx-0 w-3xs  flex items-center justify-center sm:justify-end text-[#2f4f4f]"> ما را در اینستاگرام دنبال کنید <img className="instagram-logo" alt="" src='/New Project (1).svg'/></div> </Link>
        </div>
     
      </div>
        <div style={{ marginTop:'15rem'}}>
          <Slider slides={SLIDES} options={OPTIONS}>
            {SLIDES.map((index) => (
              <div className="embla__slide" key={index}>
                <Image
                  className="embla__slide__img"
                  src={`/test${index + 1}.jpg`}
                  alt="Your alt text"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </Slider>
         
          
          </div>

      <div className="hidden lg:block absolute lg:-top-60 lg:-left-60 2xl:-top-48 2xl:-left-48 bg-[#e6c5aa] w-[500px] h-[500px] rounded-full" />
<footer style={{height:'20vh',background:'gray'}}> Placeholder for footer</footer>
    </section>
  );
}


// mt-30 md:mt-48 lg:mt-64