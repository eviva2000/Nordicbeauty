import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <Navbar />
      <div className="absolute top-128 right-12 max-w-[800px] text-right">
        <h1 className="text-[150px] leading-[1]  text-[#2f4f4f] text-center">ZibaNordic</h1>
        <h4 className="text-[40px] text-[#2f4f4f] text-center">منتخبی از برندهای اصیل جهانی</h4>
        <p className="text-right text-[#2f4f4f] mt-12">
          در زیبانوردیک، ما زیبایی را اتفاقی نمی‌دانیم. با دقت و وسواس، محصولات آرایشی و بهداشتی از
          معتبرترین برندهای جهانی را انتخاب می‌کنیم و مستقیماً از اروپا به ایران می‌رسانیم. اینجا،
          کیفیت، اصالت و سلامت در اولویت‌اند — برای کسانی که زیبایی را جدی می‌گیرند
        </p>
      </div>
      <div className="absolute -top-48 -left-48 bg-[#e6c5aa] w-[500px] h-[500px] rounded-full" />
      <div className="absolute -bottom-50 left-0 w-full max-w-[1300px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1500px]">
        <img src="/three-circles-with-flowers.svg" alt="three-circles" className="w-full h-auto" />
      </div>
    </section>
  );
}
