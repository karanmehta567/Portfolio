import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Interview Recruiter",
    description:
      "Built AI interview recruiter application using Nextjs,OpenAI which lets you mock interviews using text to speech recognition(VAPI) and also provides feedback related to the selected domain",
    image: "/project/interview.png",
    tags: ["Nextjs","Vapi", "TailwindCSS", "Supabase-Auth"],
    demoUrl: "https://interview-project-khaki.vercel.app/auth",
    githubUrl: "https://github.com/karanmehta567/interview-project",
  },
  {
    id: 2,
    title: "ElysiaChat",
    description:
      "Real Time Chat Application created using Nextjs,Tanstack Query,Zod,Upstash Redis which lets you chat in real time and also self destroys the room after TTL expiration",
    image: "/project/chat.png",
    tags: ["Typescript", "Nextjs", "TanStack Query", "Upstash-Redis"],
    demoUrl: "https://chat-message-elysia.vercel.app/",
    githubUrl: "https://github.com/karanmehta567/redis-messaging-elysia",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-10 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Here are some of my recent projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                <div className="flex flex-wrap gap-2 mb-4 items-center justify-between">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground hover:bg-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex mt-8 items-end justify-end">
                  <div className="flex items-center justify-between gap-x-5 flex-1/2">
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
