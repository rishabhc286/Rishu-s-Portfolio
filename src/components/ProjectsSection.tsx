import { Github, ExternalLink, Lock } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Vital-X",
    isDone: true,
    description:
      "A health & fitness tracking application focused on monitoring vital stats, daily habits, and personal wellness goals. Built with a clean, data-driven UI that helps users stay consistent with their fitness journey through smart tracking and progress visualization.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST API"],
    githubUrl: "https://github.com/rishabhc286/Vital-x",
    liveUrl: "https://vital-x.netlify.app/",
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

      {/* ── Vital-X Card ── */}
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative border-2 border-black p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          {/* Done Badge */}
          <div className="absolute -top-3 -right-3 flex items-center gap-1.5 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 -rotate-3">
            ✓ Shipped
          </div>

          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-3xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4 tracking-tight">
                {project.title}
              </h3>
              <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest mt-2 whitespace-nowrap">
                v1.0 — live
              </span>
            </div>

            <p className="body-text text-sm font-normal leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-black text-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-white hover:text-black"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      ))}

      {/* ── Revealing Soon Card ── */}
      <div className="group relative border-2 border-black/20 border-dashed p-6 flex flex-col items-center justify-center min-h-[280px] bg-white/50 hover:border-black hover:bg-white transition-all duration-500 overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] via-transparent to-black/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Lock icon */}
        <div className="relative z-10 flex flex-col items-center gap-5 text-center">
          <div className="w-14 h-14 border-2 border-black/20 group-hover:border-black flex items-center justify-center transition-all duration-300 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Lock className="w-6 h-6 text-black/30 group-hover:text-black transition-colors duration-300" />
          </div>

          <div>
            <p className="font-black text-xl uppercase tracking-tighter text-black/20 group-hover:text-black/60 transition-colors duration-300">
              ???
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-black/30 group-hover:text-black/50 mt-1 transition-colors duration-300">
              Next Project
            </p>
          </div>

          <div className="px-4 py-2 border border-black/20 group-hover:border-black bg-transparent transition-all duration-300">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/30 group-hover:text-black font-bold transition-colors duration-300">
              Revealing Soon
            </span>
          </div>

          <p className="font-mono text-[10px] text-black/20 group-hover:text-black/40 transition-colors duration-300">
            // stay tuned 👀
          </p>
        </div>
      </div>

    </div>
  </SectionBlock>
);

export default ProjectsSection;
