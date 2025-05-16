import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opcaity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Karan
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Mehta
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            I craft stellar websites using modern tech, dive into DevOps with
            confidence, and unwind on weekends solving LeetCode challenges for
            fun.
          </p>
          <div className="pt-2 opacity-0 mr-2 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View my work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
