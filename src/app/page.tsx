"use client";

import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Services";
import Image from "next/image";
import "./globals.css";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";
import BurgerMenu from "@/components/menu/BurgerMenu";

export default function Home() {
  return (
    <GlobalStateProvider>
      <Navbar />
      <BurgerMenu />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </GlobalStateProvider>
  );
}
