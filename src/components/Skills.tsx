"use client"

import {
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiOpenjdk,
    SiGit,
    SiGithub,
    SiPostman,
    SiShadcnui,
    SiSocketdotio,
    SiFigma,
    SiReactrouter,
} from "react-icons/si"
import type { IconType } from "react-icons"

type Skill = {
    name: string
    icon: IconType
    color: string
}

const skills: Skill[] = [
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Shadcn UI", icon: SiShadcnui, color: "#000000" },
    { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
]

const SkillsSection = () => {
    return (
        <section className="mt-20 px-6 lg:ml-20">
            <h2 className="relative inline-block text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Tech Universe
                <svg className="absolute left-0 -bottom-1 w-full h-1 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                </svg>
            </h2>

            <div className="flex flex-wrap items-center">
                {skills.map(({ name, icon: Icon, color }) => (
                    <div
                        key={name}
                        className="relative group flex items-center justify-center"
                    >
                        <div
                            className="w-14 h-14 flex items-center justify-center rounded-xl
              border border-transparent
              transition-all duration-300
              group-hover:scale-110
              group-hover:border-orange-500/70
              group-hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]"
                        >
                            <Icon className="text-3xl" style={{ color }} />
                        </div>

                        <span
                            className="absolute -top-8 px-2 py-1 text-xs rounded-md
              bg-black text-white opacity-0 scale-95
              group-hover:opacity-100 group-hover:scale-100
              transition-all duration-200 whitespace-nowrap"
                        >
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection