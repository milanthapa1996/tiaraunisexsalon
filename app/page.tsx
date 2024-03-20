import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
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
     <Gallery/>
     <Contact/>
    </main>
  );
}
