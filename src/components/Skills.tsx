"use client";

import {
    SiTypescript, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss,
    SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiMysql,
    SiHtml5, SiCss3, SiPostman, SiVercel
} from "react-icons/si";

import { SiOpenjdk } from "react-icons/si";

import { FaLinux, FaGitAlt, FaGithub, FaFigma, FaNpm } from "react-icons/fa";
import { IconType } from "react-icons";

type Skill = {
    name: string;
    icon: IconType;
    color: string;
};

const skills: Skill[] = [
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "Java", icon: SiOpenjdk, color: "#007396" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "MySQL", icon: SiMysql, color: "#4479a1" },
];

const SkillsSection = () => (
    <div className="mt-16 lg:ml-20 px-6">
        {/* Heading with gradient theme */}
        <h2 className="text-3xl font-bold mb-8 text-left lg:text-left
            bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Skills & Tools
        </h2>

        <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            {skills.map(({ name, icon: Icon, color }) => (
                <div
                    key={name}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl
                        bg-white/10 backdrop-blur-lg shadow-lg cursor-default
                        transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <Icon className="text-xl" style={{ color }} />
                    <span className="font-semibold text-sm
                        bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        {name}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

export default SkillsSection;
