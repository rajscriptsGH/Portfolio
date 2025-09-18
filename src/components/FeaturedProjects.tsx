"use client"
import Image from "next/image"
import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const FeaturedProjects = () => {
    const projects = [
        {
            title: "Pictofy",
            img: "/pictofy.png",
            desc: "A modern AI-powered web app that generates stunning images from text.",
            tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
            github: "https://github.com/rajscriptsGH/Pictofy",
            demo: "https://pictofy.vercel.app",
        },
        {
            title: "ByteBrain",
            img: "/bytebrain.png",
            desc: "A full-stack Second Brain app to organize thoughts, ideas, and notes.",
            tech: ["TypeScript", "React", "Node.js", "MongoDB", "Express", "Tailwind"],
            github: "https://github.com/rajscriptsGH/ByteBrain",
            demo: "https://bytebrain.vercel.app",
        },
        {
            title: "AnonQuest (in progress)",
            img: "/anonquest.png",
            desc: "An open-source AMA (Ask Me Anything) app with anonymous Q&A.",
            tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/rajscriptsGH/AnonQuest",
            demo: "https://anonquest.vercel.app",
        },
        {
            title: "Talksy (in progress)",
            img: "/talksyChat.png",
            desc: "A real-time chat and video app for fast and simple communication.",
            tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Socket.io", "Stream"],
            github: "https://github.com/rajscriptsGH/Talksy",
            demo: "https://talksy.vercel.app",
        },
    ]

    return (
        <div id="project" className="relative max-w-6xl mx-auto px-6 py-20 lg:ml-20">
            <h2 className="text-4xl font-bold mb-16 text-left">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Featured
                </span>{" "}
                Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-full max-w-md"
                    >
                        {/* Image */}
                        <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden">
                            <Image
                                src={p.img}
                                alt={p.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Always visible content */}
                            <div className="absolute bottom-0 left-0 p-4 bg-white/80 backdrop-blur-md rounded-tl-xl rounded-tr-xl">
                                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-gray-700">{p.desc}</p>
                            </div>

                        </div>


                        {/* Content that slides up on hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md rounded-b-2xl transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">

                            {/* Title with gradient */}
                            <h3 className="text-2xl font-bold mb-2 
        bg-gradient-to-r from-blue-500 to-cyan-400 
        bg-clip-text text-transparent">
                                {p.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-700 mb-4">{p.desc}</p>

                            {/* Tech stack with hover gradient */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="badge badge-outline text-gray-700 border-gray-400 
                    hover:text-transparent hover:bg-clip-text 
                    hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 
                    transition-all duration-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-4">
                                {/* GitHub Button */}
                                <a
                                    href={p.github}
                                    target="_blank"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white font-semibold text-sm border-2 border-transparent transition-all duration-300 hover:border-blue-500 hover:scale-105"
                                >
                                    <FaGithub className="text-lg" />
                                    GitHub
                                </a>

                                {/* Demo Button */}
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
                                >
                                    <FaExternalLinkAlt className="text-lg" />
                                    Demo
                                </a>
                            </div>


                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProjects
