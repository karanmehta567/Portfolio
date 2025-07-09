import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description:
      "Built a responsive dark-themed AI website using React and Tailwind CSS with a clean, modern UI",
    image: "/project/reavy.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://landing-react-randomai.vercel.app/",
    githubUrl: "https://github.com/karanmehta567/Landing-react",
  },
  {
    id: 2,
    title: "CloudShipX",
    description:
      "Vercel Clone replicates your project files to an S3 bucket, retrieves them locally to build the project, and then deploys the required build artifacts back to S3. Redis is used to manage real-time continuation messages, such as upload status and deployment progress",
    image: "/project/project1.png",
    tags: ["Typescript", "React", "AWS-SDK", "Redis"],
    githubUrl: "https://github.com/karanmehta567/CloudShipX",
  },
  {
    id: 3,
    title: "Travel Planner",
    description:
      "It lets you plan your upcoming travelling journey,create itineraries and pinpoint the location on globe",
    image: "/project/travel.png",
    tags: ["NextJS", "Typescript", "PostgreSQL", "OAuth"],
    githubUrl: "https://github.com/karanmehta567/travel-planner",
    demoUrl: "https://travel-planner-murex.vercel.app/",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/karanmehta567"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
