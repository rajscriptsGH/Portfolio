"use client"
import React, { FC } from "react"

const About: FC = () => {
  return (
    <section id="about" className="mt-16 px-6 lg:ml-24">
      {/* Heading */}
      <h1 className="text-2xl font-bold font-Ovo text-slate-300 mb-4">
        About Me
      </h1>

      {/* Description */}
      <div className="flex flex-col gap-4 items-start justify-center max-w-[700px] text-gray-500 leading-relaxed">
        <p>
          Hi! I am <span className="font-bold text-slate-400">Raj Yadav</span>, a{" "}
          <span className="text-blue-600">Computer Science graduate</span> and{" "}
          <span className="text-amber-600">Full-Stack Developer</span> passionate
          about building impactful digital products.
        </p>

        <p>
          I specialize in{" "}
          <span className="font-semibold text-green-600">MERN </span>stack,{" "}
          <span className="font-semibold text-black">Next.js</span>, and{" "}
          <span className="font-semibold text-blue-500">TypeScript</span>. Currently,
          I am exploring <span className="text-purple-600">Web3 </span> and diving
          deeper into <span className="text-pink-600">UI/UX design</span>.
        </p>

        <p>
          I love creating user-friendly applications, contributing to{" "}
          <span className="italic">open-source projects</span>, and solving{" "}
          <span className="underline decoration-amber-500">real-world problems</span>{" "}
          through code.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="border border-amber-600 text-amber-600 px-5 py-2 rounded-md transition hover:bg-amber-600 hover:text-white"
        >
          See More
        </button>
        <button
          type="button"
          className="bg-blue-700 border border-transparent px-5 py-2 rounded-md text-white transition hover:bg-green-600"
        >
          Resume
        </button>
      </div>
    </section>
  )
}

export default About
