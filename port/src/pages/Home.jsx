import React from "react";
import { ThemeToggle } from "../components/Toggle";
import Starbackground from "../components/Starbackground";
import { Navbar } from "../components/Navbar";

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
      {/* footer */}
    </div>
  );
}

export default Home;
