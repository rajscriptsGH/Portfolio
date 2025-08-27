import Contact from "@/components/Contact";
import Github from "@/components/Github";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Github />
      <Contact />
    </div>
  );
}
