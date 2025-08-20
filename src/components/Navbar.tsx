import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-10 w-full flex justify-start items-center px-4 md:px-20 py-4 md:py-6">
      <Link href='/'  className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[80px] lg:h-[80px] overflow-hidden rounded-full">
        <Image src="/logo.png" alt="logo" className="w-full h-full object-cover" width={500} height={500}/>
      </Link>
    </nav>
  );
}
