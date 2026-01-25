"use client"

import Image from "next/image"
import type { ReactNode } from "react"
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact,
    FaNodeJs
} from "react-icons/fa"
import {
    SiNextdotjs,
    SiTypescript,
    SiMongodb,
    SiTailwindcss,
    SiStreamlit,
    SiPostgresql
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
    | "Postgres"

type TechMeta = {
    icon: ReactNode
    color: string
    name: string
}

const techIcons: Record<TechKey, TechMeta> = {
    React: {
        icon: <FaReact />,
        color: "#61DAFB",
        name: "React",
    },
    Nextjs: {
        icon: <SiNextdotjs />,
        color: "#ffffff",
        name: "Next.js",
    },
    "Next.js": {
        icon: <SiNextdotjs />,
        color: "#ffffff",
        name: "Next.js",
    },
    TypeScript: {
        icon: <SiTypescript />,
        color: "#3178C6",
        name: "TypeScript",
    },
    "Node.js": {
        icon: <FaNodeJs />,
        color: "#3C873A",
        name: "Node.js",
    },
    MongoDB: {
        icon: <SiMongodb />,
        color: "#47A248",
        name: "MongoDB",
    },
    Postgres: {
        icon: <SiPostgresql />,
        color: "#47A248",
        name: "Postgres",
    },
    Tailwind: {
        icon: <SiTailwindcss />,
        color: "#38BDF8",
        name: "Tailwind CSS",
    },
    Stream: {
        icon: <SiStreamlit />,
        color: "#FF4B4B",
        name: "Stream",
    },
}

const FeaturedProjects = () => {
    const projects: {
        title: string
        img: string
        desc: string
        tech: TechKey[]
        github: string
        demo: string
    }[] = [
            {
                title: "MentorHub",
                img: "/mentorhub.png",
                desc: "A modern mentorship platform that connects learners with mentors, enabling guided learning, knowledge sharing, and meaningful professional growth through a clean and intuitive interface.",
                tech: ["Nextjs", "React", "Postgres", "TypeScript", "Tailwind"],
                github: "#",
                demo: "https://true-mentorhub.vercel.app/",
            },
            {
                title: "Pictofy",
                img: "/pictofy.png",
                desc: "An AI-powered image generation platform that allows users to create, explore, and manage high-quality visuals in real time, combining creativity with a smooth and responsive user experience.",
                tech: ["React", "Node.js", "MongoDB", "Tailwind"],
                github: "https://github.com/rajscriptsGH/Pictofy",
                demo: "https://pictofy.vercel.app",
            },
            {
                title: "AnonQuest",
                img: "/anonquest.png",
                desc: "A secure anonymous Q&A platform where users can ask and answer questions freely, designed to encourage honest conversations while maintaining privacy and simplicity.",
                tech: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind"],
                github: "https://github.com/rajscriptsGH/AnonQuest",
                demo: "https://anonquest.vercel.app",
            },
            {
                title: "Talksy",
                img: "/talksyChat.png",
                desc: "A real-time communication platform offering instant messaging and video interactions, built to deliver fast, reliable, and engaging conversations across devices.",
                tech: ["React", "Node.js", "MongoDB", "Stream"],
                github: "https://github.com/rajscriptsGH/Talksy",
                demo: "https://talksy-jwl9.onrender.com",
            },
        ]

    return (
        <section id="project" className="max-w-5xl mx-auto px-8 py-20 lg:ml-20">
            <h2 className="relative inline-block text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
                <svg className="absolute left-0 -bottom-1 w-full h-1 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                </svg>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="group rounded-2xl bg-[#0b0b0b] border border-white/10 overflow-hidden transition-all duration-500 hover:border-orange-500/80 hover:scale-[1.03]"
                    >
                        <div className="relative h-60 p-4 flex items-center justify-center bg-gradient-to-br from-[#e8dcc8] via-[#c9d4ff] to-[#2a2a2a]">
                            <div className="relative w-full h-full max-w-[90%] rounded-xl overflow-hidden shadow-2xl">
                                <Image src={p.img} alt={p.title} fill />
                            </div>
                        </div>

                        <div className="p-6 text-white">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-semibold">{p.title}</h3>
                                <div className="flex gap-4">
                                    <a href={p.github} target="_blank" className="text-gray-400 hover:text-white transition">
                                        <FaGithub size={18} />
                                    </a>
                                    <a href={p.demo} target="_blank" className="text-gray-400 hover:text-orange-500 transition">
                                        <FaExternalLinkAlt size={16} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mb-5">{p.desc}</p>

                            <div className="flex gap-4 text-xl">
                                {p.tech.map((t, idx) => (
                                    <div key={idx} className="relative group/icon">
                                        <span
                                            style={{ color: techIcons[t].color }}
                                            className="transition-transform duration-300 group-hover/icon:scale-125"
                                        >
                                            {techIcons[t].icon}
                                        </span>
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-black px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition">
                                            {techIcons[t].name}
                                        </span>
                                    </div>
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