import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#30334b] text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 md:px-16 gap-6">
        {/* Left column */}
        <div className="text-center md:text-left">
          <h5 className="text-2xl font-semibold">ZibaNordic</h5>
          <p className="text-sm mt-1">© {new Date().getFullYear()} ZibaNordic</p>
          <p className="text-sm">All rights reserved</p>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 items-center md:items-end md:text-right">
          <Link href="/contact" className="text-md ">
            تماس با ما
          </Link>
          <p className="mt-1 text-xs max-w-xs md:ml-auto ">
            تیم ما با عشق و دقت فراوان تلاش می‌کند بهترین و باکیفیت‌ترین محصولات را یافته، تست کند و
            سپس به شما ارائه دهد
          </p>
        </div>
      </div>
    </footer>
  );
}
