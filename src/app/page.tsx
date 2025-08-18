import Hero from "@/components/Hero";
import Slider from "@/components/Slider/Slider";
import WhatWeDeliver from "@/components/WhatWeDeliver";
import InstagramSection from "@/components/InstagramSection";

//------------------ Main Page Component------------------
export default function Home() {
  return (
    <>
        <Hero />
        <WhatWeDeliver />
        <Slider />
        <InstagramSection />
    </>
  );
}
