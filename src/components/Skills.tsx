"use client";

import {
    SiTypescript, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss,
    SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiMysql,
    SiHtml5, SiCss3, SiPostman, SiVercel
} from "react-icons/si";
import { FaLinux, FaGitAlt, FaGithub, FaFigma, FaNpm } from "react-icons/fa";
import { IconType } from "react-icons";

type Skill = {
    name: string;
    icon: IconType;
    color: string; // brand color
};

const skills: Skill[] = [
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    { name: "Linux", icon: FaLinux, color: "#333333" },
    { name: "Git", icon: FaGitAlt, color: "#f05032" },
    { name: "GitHub", icon: FaGithub, color: "#333333" },
    { name: "Postman", icon: SiPostman, color: "#ff6c37" },
    { name: "npm", icon: FaNpm, color: "#cb3837" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Figma", icon: FaFigma, color: "#f24e1e" },
];

const SkillsSection = () => (
    <div className="mt-10 lg:ml-16 p-6">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Skills & Tools
        </h2>
        <div className="flex flex-wrap gap-3">
            {skills.map(({ name, icon: Icon, color }) => (
                <span
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm 
                     bg-gray-300 text-black cursor-pointer transition-colors duration-300"
                    style={{
                        // default
                        backgroundColor: "var(--skill-bg, #e5e7eb)",
                        color: "var(--skill-text, black)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = color;
                        e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#e5e7eb"; // Tailwind gray-300
                        e.currentTarget.style.color = "black";
                    }}
                >
                    <Icon className="text-base" />
                    {name}
                </span>
            ))}
        </div>
    </div>
);

export default SkillsSection;
