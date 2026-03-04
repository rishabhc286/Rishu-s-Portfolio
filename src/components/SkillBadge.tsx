import { useState } from "react";

/* ─── Icon map: skill name → devicon SVG URL ─────────────────────── */
const ICON_MAP: Record<string, string> = {
    // Frontend
    JavaScript:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    React:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    TypeScript:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "Tailwind CSS":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",

    // Backend & DB
    "Node.js":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    Firebase:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    "Express.js":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    MongoDB:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",

    // Languages
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    Python:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",

    // Tools
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    GitHub:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    Figma:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    Vercel:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    "Ubuntu Linux":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
    Webstorm:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg",
    "Intellij IDEA":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    "After Effects":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg",
    Blender:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",

    // AI Integration — custom icon
    "AI Integration":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",

    // DSA — no icons, keep plain
};

interface SkillBadgeProps {
    skill: string;
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
    const [hovered, setHovered] = useState(false);
    const iconUrl = ICON_MAP[skill];

    return (
        <span
            className="skill-badge"
            data-has-icon={!!iconUrl}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {iconUrl && (
                <span className={`skill-badge__icon ${hovered ? "skill-badge__icon--visible" : ""}`}>
                    <img src={iconUrl} alt={skill} width={14} height={14} loading="lazy" />
                </span>
            )}
            <span className={`skill-badge__label ${hovered && iconUrl ? "skill-badge__label--shifted" : ""}`}>
                {skill}
            </span>
        </span>
    );
};

export default SkillBadge;
