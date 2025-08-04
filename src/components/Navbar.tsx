export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-10 w-full flex justify-end items-center px-4 md:px-20 py-4 md:py-6">
      {/* <div className="text-lg md:text-2xl font-light text-[#2f4f4f]">ZibaNordic</div> */}
      <div className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px] overflow-hidden rounded-full">
        <img src="/logo.png" alt="logo" className="w-full h-full object-cover" />
      </div>
    </nav>
  );
}
