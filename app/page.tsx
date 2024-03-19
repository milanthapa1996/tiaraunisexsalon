import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <main>
     <HeroSection/>
     <About/>
     <Services/>
     <Teams/>
    </main>
  );
}
