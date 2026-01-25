"use client"

import Image from "next/image"
import { ReactNode } from "react"
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact,
    FaNodeJs,
} from "react-icons/fa"
import {
    SiNextdotjs,
    SiTypescript,
    SiMongodb,
    SiTailwindcss,
    SiStreamlit,
} from "react-icons/si"


type TechKey =
    | "React"
    | "Nextjs"
    | "Next.js"
    | "TypeScript"
    | "Node.js"
    | "MongoDB"
    | "Tailwind"
    | "Stream"

type Project = {
    title: string
    img: string
    desc: string
    tech: TechKey[]
    github: string
    demo: string
}

const techIcons: Record<TechKey, ReactNode> = {
    React: <FaReact />,
    Nextjs: <SiNextdotjs />,
    "Next.js": <SiNextdotjs />,
    TypeScript: <SiTypescript />,
    "Node.js": <FaNodeJs />,
    MongoDB: <SiMongodb />,
    Tailwind: <SiTailwindcss />,
    Stream: <SiStreamlit />,
}


const FeaturedProjects = () => {
    const projects: Project[] = [
        {
            title: "MentorHub",
            img: "/mentorhub.png",
            desc: "A platform to help and mentor others.",
            tech: ["Nextjs", "React", "TypeScript", "Tailwind"],
            github: "#",
            demo: "https://true-mentorhub.vercel.app/",
        },
        {
            title: "Pictofy",
            img: "/pictofy.png",
            desc: "AI-powered image generation web app.",
            tech: ["React", "Node.js", "MongoDB", "Tailwind"],
            github: "https://github.com/rajscriptsGH/Pictofy",
            demo: "https://pictofy.vercel.app",
        },
        {
            title: "AnonQuest",
            img: "/anonquest.png",
            desc: "Anonymous AMA platform.",
            tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
            github: "https://github.com/rajscriptsGH/AnonQuest",
            demo: "https://anonquest.vercel.app",
        },
        {
            title: "Talksy",
            img: "/talksyChat.png",
            desc: "Real-time chat & video platform.",
            tech: ["React", "Node.js", "MongoDB", "Stream"],
            github: "https://github.com/rajscriptsGH/Talksy",
            demo: "https://talksy-jwl9.onrender.com",
        },
    ]

    return (
        <section
            id="project"
            className="max-w-5xl mx-auto px-8 py-20 lg:ml-20"
        >
            <h2 className="relative inline-block text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
                <svg
                    className="absolute left-0 -bottom-1 w-full h-1 text-yellow-400"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path
                        d="M0 5 Q 25 0, 50 5 T 100 5"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="group rounded-2xl bg-[#0b0b0b] border border-white/10 
            overflow-hidden transition-all duration-500 
            hover:border-orange-500/80 hover:scale-[1.03]"
                    >
                        {/* Image Frame */}
                        <div className="relative h-60 p-4 flex items-center justify-center bg-gradient-to-br from-[#e8dcc8] via-[#c9d4ff] to-[#2a2a2a]">
                            <div className="relative w-full h-full max-w-[90%] rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src={p.img}
                                    alt={p.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 text-white">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-semibold">{p.title}</h3>

                                <div className="flex gap-4">
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        className="text-gray-400 hover:text-white transition"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        className="text-gray-400 hover:text-orange-500 transition"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mb-5">{p.desc}</p>

                            <div className="flex gap-3 text-xl text-gray-400">
                                {p.tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        title={t}
                                        className="hover:text-orange-500 transition"
                                    >
                                        {techIcons[t]}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProjects