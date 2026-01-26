"use client"

import React from "react"
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si"

const About = () => {
  return (
    <section className="mt-8 px-6 lg:ml-28 md:ml-6">
      <p className="max-w-[760px] text-sm sm:text-base text-white leading-8">
        I design & develop interactive web apps using{" "}
        <span className="inline-flex items-center gap-1.5 px-2 mx-1 rounded-md
          border border-white/30 text-white bg-white/10
          transition hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]">
          <SiNextdotjs className="text-sm" />
          Next.js
        </span>
        ,{" "}
        <span className="inline-flex items-center gap-1.5 px-2 mx-1 rounded-md
          border border-[#3178C6]/40 text-[#3178C6] bg-[#3178C6]/10
          transition hover:border-[#3178C6] hover:shadow-[0_0_12px_rgba(49,120,198,0.5)]">
          <SiTypescript className="text-sm" />
          TypeScript
        </span>
        ,{" "}
        <span className="inline-flex items-center gap-1.5 px-2 mx-1 rounded-md
          border border-cyan-400/40 text-cyan-400 bg-cyan-400/10
          transition hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.5)]">
          <SiReact className="text-sm" />
          React
        </span>
        , and{" "}
        <span className="inline-flex items-center gap-1.5 px-2 mx-1 rounded-md
          border border-teal-400/40 text-teal-400 bg-teal-400/10
          transition hover:border-teal-400 hover:shadow-[0_0_12px_rgba(45,212,191,0.5)]">
          <SiTailwindcss className="text-sm" />
          Tailwind CSS
        </span>
        . Driven by a strong sense of UI design, I create visually engaging interfaces and smooth user experiences.
        
      </p>
    </section>
  )
}

export default About