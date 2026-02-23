"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EngineeringPhilosophy from "@/components/EngineeringPhilosophy";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <EngineeringPhilosophy />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
