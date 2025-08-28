import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Github from "@/components/Github";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Github />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}
