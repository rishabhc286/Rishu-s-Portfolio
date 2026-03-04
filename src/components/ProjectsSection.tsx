import SectionBlock from "./SectionBlock";
import ChromaGrid, { ChromaItem } from "./ChromaGrid/ChromaGrid";

const projects: ChromaItem[] = [
  {
    id: 1,
    image: "/images/vitalx-preview.png",
    title: "Vital-X",
    subtitle: "Health & Fitness Tracker",
    description:
      "A health & fitness tracking app focused on monitoring vital stats, daily habits, and personal wellness goals. Smart tracking and progress visualization.",
    tags: ["HTML5", "CSS3", "JS", "Firebase", "Gemini 1.5 Flash API"],
    borderColor: "#22c55e",
    gradient: "linear-gradient(145deg, #0d1f0f 0%, #0d0d0d 60%, #111 100%)",
    githubUrl: "https://github.com/rishabhc286/Vital-x",
    liveUrl: "https://vital-x.netlify.app/",
    status: "shipped",
  },
  {
    id: 2,
    title: "???",
    subtitle: "Next Project",
    description: "",
    borderColor: "rgba(255,255,255,0.15)",
    gradient: "linear-gradient(145deg, #111 0%, #0d0d0d 100%)",
    status: "locked",
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div style={{ width: "100%", position: "relative" }}>
      <ChromaGrid
        items={projects}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  </SectionBlock>
);

export default ProjectsSection;
