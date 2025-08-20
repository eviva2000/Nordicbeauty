import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 h-[250px] md:h-[150px]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 md:px-16 gap-6">
        {/* Left column */}
        <div className="text-center md:text-left">
          <h5 className="text-2xl font-semibold">NordicBeauty</h5>
          <p className="text-sm mt-1">© {new Date().getFullYear()} NordicBeauty</p>
          <p className="text-sm">All rights reserved</p>
        </div>

        <div className="flex flex-col gap-4 items-center md:items-end md:text-right">
          <Link href="/contact" className="text-md ">
            Contact Us
          </Link>
          <p className="mt-1 text-xs max-w-xs md:ml-auto ">
            Our team works with love and meticulous care to find, test, and deliver the best and highest quality products to you
          </p>
        </div>
      </div>
    </footer>
  );
}
