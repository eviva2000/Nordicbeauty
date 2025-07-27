// import Navbar from "./Navbar";

// export default function Hero() {
//   return (
//     <section className="relative w-screen h-screen">
//       <Navbar />
//       <div className="flex flex-col xl:block">
//         <div className="relative mt-40 md:mt-48 lg:mt-64 xl:absolute xl:top-128 xl:right-12 xl:max-w-[800px]">
//           <h1 className="text-[48px] sm:text-[64px] md:text-[90px] lg:text-[100px] xl:text-[150px] leading-[1]  text-[#2f4f4f] text-center">
//             ZibaNordic
//           </h1>
//           <h4 className="text-[18px] sm:text-[28px] md:text-[25px] lg:text-[30px] mt-2 text-[#2f4f4f] text-center">
//             منتخبی از برندهای اصیل جهانی
//           </h4>
//           <p className="text-right text-[#2f4f4f] mt-12 px-4 sm:px-16 md:px-36 text-[14px] sm:text-[14px]">
//             در زیبانوردیک، ما زیبایی را اتفاقی نمی‌دانیم. با دقت و وسواس، محصولات آرایشی و بهداشتی
//             از معتبرترین برندهای جهانی را انتخاب می‌کنیم و مستقیماً از اروپا به ایران می‌رسانیم.
//             اینجا، کیفیت، اصالت و سلامت در اولویت‌اند — برای کسانی که زیبایی را جدی می‌گیرند
//           </p>
//         </div>
//       </div>

//       <div className="hidden lg:block absolute lg:-top-60 lg:-left-60 2xl:-top-48 2xl:-left-48 bg-[#e6c5aa] w-[500px] h-[500px] rounded-full" />

//       {/* <div className="absolute -bottom-50 left-0 w-full max-w-[1300px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1500px]">
//         <img src="/three-circles-with-flowers.svg" alt="three-circles" className="w-full h-auto" />
//       </div> */}

//       <div className="absolute -bottom-16 left-0 sm:-bottom-24 md:-bottom-32 lg:-bottom-36 xl:-bottom-32 w-full md:max-w-[900px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1500px] border">
//         <picture>
//           <source media="(min-width: 1280px)" srcSet="/three-circles-with-flowers.svg"/>
//           <img src="/main-circle-with-flowers.svg" alt="main-circles" className="w-full h-auto border border-amber-300" />
//         </picture>
//       </div>
//     </section>
//   );
// }
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <Navbar />
      <div className="main-content flex flex-col items-end px-6">
        <div className=" relative mt-40 md:mt-48 lg:mt-64  xl:max-w-[800px] lg:px-20">
          <h1 className="text-[48px] sm:text-[64px] md:text-[90px]  leading-[1]  text-[#2f4f4f] text-center sm:text-right">
            ZibaNordic
          </h1>
          <h4 className="text-[18px] sm:text-[28px] md:text-[25px] lg:text-[30px] mt-2 text-[#2f4f4f] text-center sm:text-right">
            منتخبی از برندهای اصیل جهانی
          </h4>
          <p className="text-right text-[#2f4f4f] mt-12 px-4text-[14px] sm:text-[14px] max-w-md">
            در زیبانوردیک، ما زیبایی را اتفاقی نمی‌دانیم. با دقت و وسواس، محصولات آرایشی و بهداشتی
            از معتبرترین برندهای جهانی را انتخاب می‌کنیم و مستقیماً از اروپا به ایران می‌رسانیم.
            اینجا، کیفیت، اصالت و سلامت در اولویت‌اند — برای کسانی که زیبایی را جدی می‌گیرند
          </p>
        </div>
      </div>

      <div className="hidden lg:block absolute lg:-top-60 lg:-left-60 2xl:-top-48 2xl:-left-48 bg-[#e6c5aa] w-[500px] h-[500px] rounded-full" />

      {/* <div className="absolute -bottom-50 left-0 w-full max-w-[1300px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1500px]">
        <img src="/three-circles-with-flowers.svg" alt="three-circles" className="w-full h-auto" />
      </div> */}

      {/* <div className="absolute -bottom-16 left-0 sm:-bottom-24 md:-bottom-32 lg:-bottom-36 xl:-bottom-32 w-full md:max-w-[900px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1500px] border">
        <picture>
          <source media="(min-width: 1280px)" srcSet="/three-circles-with-flowers.svg"/>
          <img src="/main-circle-with-flowers.svg" alt="main-circles" className="w-full h-auto border border-amber-300" />
        </picture>
      </div> */}
    </section>
  );
}
