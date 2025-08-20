import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <div className="first-fold  bg-cover bg-center bg-no-repeat w-full h-full">
        <div className="flex flex-col items-center sm:items-start gap-8 px-8 sm:px-0 lg:px-20 pt-32 lg:pt-45 hero-content">
          <h1 className="text-[32px] sm:text-[50px] leading-[1]">NordicBeauty</h1>
         <div> <h3 className=" text-[22px] md:text-[32px] text-creamy-100 mb-2 text-left ">
            Curated Selection of Authentic Brands
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] sm:text-left max-w-2xl ">
            At NordicBeauty, we carefully select beauty and wellness products from
            the most trusted global brands.
            Here, quality, authenticity, and health are our priorities for those
            who take beauty and wellness seriously.
          </p>
          </div>
          <Link
            className="bg-[#d6d6d6] p-4 rounded-full w-3xs flex items-center justify-center sm:justify-center cta overflow-hidden relative"
            href="#slider"
          >
            <span className="text-black relative">Our Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
