import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <Navbar />
     <div className="absolute -top-48 -left-48 bg-[#e6c5aa] w-[500px] h-[500px] rounded-full" />
      <div className="absolute -bottom-50 left-0 w-full max-w-[1300px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1500px]">
        <img src="/three-circles-with-flowers.svg" alt="three-circles" className="w-full h-auto" />
      </div>
    </section>
  );
}
