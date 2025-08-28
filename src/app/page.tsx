import About from "@/components/About";
import Contact from "@/components/Contact";
import Github from "@/components/Github";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Github />
      <About />
      <Contact />
    </div>
  );
}
