import { FaCloud, FaPenFancy } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

function AboutSection() {
  const downloadFile = (e) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/uc?export=download&id=1e1sR4lDksUBQSyXBf6aCL_NyddPbAQz2",
      "_blank"
    );
  };
  return (
    <section className="py-24 relative px-3" id="about">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Code, Deploy, Repeat – Web Dev with a DevOps Flair
            </h3>
            <p className="text-muted-foreground">
              Fond of crafting sleek frontend UIs and building solid backend
              systems, I enjoy solving LeetCode problems over a cup of coffee on
              weekends, all while sharpening my DevOps edge to streamline
              development and deployment workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <button
                className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors"
                onClick={downloadFile}
                target="_blank"
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-3 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <FaLaptopCode className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web development</h4>
                  <p className="text-muted-foreground">
                    I build fast, responsive web apps with clean UIs and
                    scalable backends using modern frameworks like React and
                    Node.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-3 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <FaCloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Devops</h4>
                  <p className="text-muted-foreground">
                    I automate deployments, manage CI/CD pipelines, and leverage
                    cloud platforms to streamline development and ensure
                    reliability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-3 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <FaPenFancy className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Leetcode Grinding</h4>
                  <p className="text-muted-foreground">
                    I love tackling complex coding challenges, using data
                    structures and algorithms to write efficient, optimized
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
