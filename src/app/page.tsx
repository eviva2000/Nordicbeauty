import Hero from "@/components/Hero";
import Slider from "@/components/Slider/Slider";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

//------------------ Main Page Component------------------
export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Slider slides={SLIDES} options={OPTIONS}>
          {SLIDES.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="embla__slide__img"
                src={`/test${index + 1}.jpg`}
                alt="Your alt text"
                width={500}
                height={500}
              />
            </div>
          ))}
        </Slider>
        <footer style={{ height: "20vh", background: "gray" }}> Placeholder for footer</footer>
      </main>
    </div>
  );
}
