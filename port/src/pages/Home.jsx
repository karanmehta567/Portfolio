import React from "react";
import { ThemeToggle } from "../components/Toggle";
import Starbackground from "../components/Starbackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme dark to light*/}
      <ThemeToggle />
      {/* background effect */}
      <Starbackground />
      {/* Nvbar */}
      <Navbar />
      {/* Hero section/ skills */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
      </main>
      {/*About Me */}
      {/* footer */}
    </div>
  );
}

export default Home;
