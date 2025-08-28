'use client'
import {
    SiTypescript, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss,
    SiNodedotjs, SiExpress, SiPostgresql, SiVercel, SiMongodb,
    SiMysql, SiHtml5, SiCss3, SiPostman
} from "react-icons/si";
import { FaLinux, FaGitAlt, FaGithub, FaFigma, FaNpm } from "react-icons/fa";
import { useState } from "react";

const skills = [
    { name: "TypeScript", icon: SiTypescript, bgColor: "#3178c6" },
    { name: "JavaScript", icon: SiJavascript, bgColor: "#f7df1e" },
    { name: "Next.js", icon: SiNextdotjs, bgColor: "#000000" },
    { name: "React", icon: SiReact, bgColor: "#61dafb" },
    { name: "Tailwind", icon: SiTailwindcss, bgColor: "#06b6d4" },
    { name: "Node.js", icon: SiNodedotjs, bgColor: "#339933" },
    { name: "Express", icon: SiExpress, bgColor: "#000000" },
    { name: "PostgreSQL", icon: SiPostgresql, bgColor: "#336791" },
    { name: "MongoDB", icon: SiMongodb, bgColor: "#47a248" },
    { name: "MySQL", icon: SiMysql, bgColor: "#4479a1" },
    { name: "HTML5", icon: SiHtml5, bgColor: "#e34f26" },
    { name: "CSS3", icon: SiCss3, bgColor: "#1572b6" },
    { name: "Linux", icon: FaLinux, bgColor: "#333333" },
    { name: "Git", icon: FaGitAlt, bgColor: "#f05032" },
    { name: "GitHub", icon: FaGithub, bgColor: "#333333" },
    { name: "Postman", icon: SiPostman, bgColor: "#ff6c37" },
    { name: "npm", icon: FaNpm, bgColor: "#cb3837" },
    { name: "Vercel", icon: SiVercel, bgColor: "#000000" },
    { name: "Figma", icon: FaFigma, bgColor: "#f24e1e" },
];

const IconCard = ({ item }: any) => {
    const IconComponent = item.icon;
    const [hover, setHover] = useState(false);

    return (
        <div
            className="group relative flex items-center justify-center w-14 h-14 rounded-lg border-2 border-gray-500 cursor-pointer transition-all duration-300 ml-5"
            style={{ backgroundColor: hover ? item.bgColor : "transparent" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <IconComponent className="text-2xl text-white" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-slate-300 text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {item.name}
            </span>
        </div>
    );
};

const SkillsSection = () => (
    <div className="mt-10 lg:ml-16 p-6">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
            Skills & Tools
        </h2>
        <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
                <IconCard key={skill.name} item={skill} />
            ))}
        </div>
    </div>
);

export default SkillsSection;
