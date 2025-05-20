import { ThemeToggle } from "../components/Toggle";
import Starbackground from "../components/Starbackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import { ProjectSection } from "../components/ProjectSection";
import { Contact } from "../components/ReachOut";

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
        <ProjectSection />
        <Contact />
      </main>
      {/*About Me */}
      {/* footer */}
    </div>
  );
}

export default Home;
