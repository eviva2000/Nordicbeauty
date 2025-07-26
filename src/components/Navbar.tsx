export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-10 w-full flex justify-between items-center px-8 py-6">
      <div className="text-2xl font-light text-[#2f4f4f]">ZibaNordic</div>

      <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
        <img src="/logo.png" alt="logo" className="w-full h-full object-cover" />
      </div>
    </nav>
  );
}
