"use client"
import React from "react"
import { GraduationCap, School } from "lucide-react"

const Education = () => {
    const education = [
        {
            degree: "B.Tech CSE",
            institution: "KIIT",
            duration: "2022 - 2025 (Dropped Out)",
            icon: <GraduationCap className="text-blue-400" size={28} />,
        },
        // {
        //     degree: "11th/12th - PCM",
        //     institution: "GGIC, Kathmandu",
        //     duration: "2018 - 2021",
        //     icon: <School className="text-green-400" size={28} />,
        // },
        // {
        //     degree: "Secondary Education",
        //     institution: "Jana Jyoti Model SS, Sarlahi",
        //     duration: "till 2018",
        //     icon: <School className="text-green-400" size={28} />,
        // },
    ]

    return (
        <section id="education" className="relative max-w-4xl mx-auto px-6 py-12 lg:ml-20">
            <h2 className="relative inline-block text-4xl font-bold mb-8 text-left">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Education
                </span>
                <svg
                    className="absolute left-0 -bottom-1 w-full h-1 text-yellow-400"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 5 Q 25 0, 50 5 T 100 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                    />
                </svg>
            </h2>

            <div className="flex flex-col gap-6">
                {education.map((edu, i) => (
                    <div
                        key={i}
                        className="group flex items-start md:items-center justify-between gap-6 p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:bg-white/20 transition-all duration-300"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20">
                                {edu.icon}
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-white">
                                    {edu.degree}
                                </h3>
                                <p className="text-gray-300">{edu.institution}</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 whitespace-nowrap">
                            {edu.duration}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education
