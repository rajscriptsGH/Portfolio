"use client"
import React, { FC } from "react"

const About: FC = () => {
  return (
    <section id="about" className="mt-16 px-6 lg:ml-24">
      {/* Heading */}
      <h1 className="relative inline-block text-3xl font-bold font-Ovo mb-6 
  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        About Me
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
      </h1>

      {/* Description */}
      <div className="flex flex-col gap-4 items-start justify-center max-w-[700px] text-base-content/70 leading-relaxed">
        <p>
          Hi! I am <span className="font-bold text-blue-500">Raj Yadav</span>, a{" "}
          <span className="text-cyan-400">Full-Stack Developer</span> passionate about building scalable and user-friendly digital solutions.
        </p>

        <p>
          I specialize in <span className="font-semibold text-blue-500">MERN stack</span>,{" "}
          <span className="font-semibold text-cyan-400">Next.js</span>, and{" "}
          <span className="font-semibold text-purple-500">TypeScript</span>. currently exploring{" "}
          <span className="text-purple-600 font-semibold">Web3</span> technologies and
          <span className="text-purple-600 font-semibold"> DevOps</span> to build robust, modern, and automated applications.
        </p>

        <p>
          My goal is to combine <span className="font-semibold text-cyan-400">full-stack development</span>,
          <span className="font-semibold text-purple-600"> Web3</span>, and <span className="font-semibold text-purple-600">DevOps</span> to create end-to-end solutions that are efficient, scalable, and impactful.
        </p>

        <p>
          I also enjoy contributing to <span className="italic">open-source projects</span> and solving{" "}
          <span className="underline decoration-blue-500">real-world problems</span> through clean and maintainable code.
        </p>
      </div>
    </section>
  )
}

export default About
