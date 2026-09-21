import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import Technology from "@/components/sections/Technology";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <Technology />
        <FeaturedProjects/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}