import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Github from "@/components/Github";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import TimeLocation from "@/components/TimeLocation";
import Blogs from "@/components/Blogs"

export default function Home() {
  return (
    <div>
      <TimeLocation />
      <Navbar />
      <Header />
      <About />
      <Github />
      <Skills />
      <FeaturedProjects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
