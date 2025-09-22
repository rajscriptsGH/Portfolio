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
          <span className="text-amber-500">CS Undergrad</span> and{" "}
          <span className="text-cyan-400">Full-Stack Developer</span> passionate
          about building impactful digital products.
        </p>

        <p>
          I specialize in{" "}
          <span className="font-semibold text-blue-500">MERN </span>stack,{" "}
          <span className="font-semibold text-cyan-400">Next.js</span>, and{" "}
          <span className="font-semibold text-purple-500">TypeScript</span>. Currently,
          I am exploring <span className="text-purple-600">Web3 </span> and diving
          deeper into <span className="font-semibold text-cyan-400">UI/UX design</span>.
        </p>

        <p>
          I love creating user-friendly applications, contributing to{" "}
          <span className="italic">open-source projects</span>, and solving{" "}
          <span className="underline decoration-blue-500">real-world problems</span>{" "}
          through code.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {/* See More Button */}
        <button
          type="button"
          className="flex items-center justify-center px-6 py-2 rounded-2xl
            bg-white/10 backdrop-blur-md border border-blue-500 text-blue-500
            font-semibold text-sm transition-all duration-300
            hover:bg-white/20 hover:shadow-lg hover:scale-105"
        >
          See More
        </button>

        {/* Resume Button */}
        <button
          type="button"
          className="flex items-center justify-center px-6 py-2 rounded-2xl
            bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold
            shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          Resume
        </button>
      </div>
    </section>
  )
}

export default About
