import Hero from "@/components/Hero";
import Slider from "@/components/Slider/Slider";


//------------------ Main Page Component------------------
export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Slider/>
        <footer style={{ height: "20vh", background: "gray" }}> Placeholder for footer</footer>
      </main>
    </div>
  );
}
