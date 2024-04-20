import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Modal from "@/components/layout/Modal";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Services";
import BurgerMenu from "@/components/menu/BurgerMenu";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";

export default function Home() {
  return (
    <GlobalStateProvider>
      <Navbar />
      <Modal />
      <BurgerMenu />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </GlobalStateProvider>
  );
}
