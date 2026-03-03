import SectionBlock from "./SectionBlock";
import AnimatedAvatar from "./AnimatedAvatar";
import { Mail } from "lucide-react";

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
            I am an Engineering student passionate about problem solving,
            software development, and continuous self-improvement. I am
            currently focused on mastering Data Structures & Algorithms,
            Java, and backend development with the goal of building scalable and
            efficient systems.
        </p>
        <p className="body-text max-w-2xl mt-6">
            Beyond academics, I maintain a disciplined lifestyle focused on fitness,
            consistency, and long-term growth. I believe in building skills daily,
            thinking logically, and executing with clarity.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          I embrace the philosophy of <strong>vibe coding</strong>—a modern
          development approach where technical precision meets creative
          intuition. By blending AI-assisted tools with a strong design
          aesthetic, I rapidly translate ideas into fluid, highly polished
          digital experiences while maintaining clean and scalable architecture.
        </p>
        <a
          href="mailto:chaudharyrishabh008@gmail.com"
          className="group relative inline-flex items-center gap-3 px-6 py-3 border-2 border-black bg-white text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
        >
          <Mail className="w-4 h-4" />
          <span>Get In Touch</span>
        </a>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
