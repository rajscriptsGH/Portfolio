'use client'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='mt-15 px-5 lg:ml-25'>
      <h1 className='text-2xl font-semibold font-Ovo'>About Me</h1>

      <div className='flex flex-col gap-2 items-center justify-center mt-4 max-w-[600px]'>
        <p className=''>Hi! I'm <span className='font-bold'>Raj Yadav</span>, a Computer Science graduate and Full-Stack Developer passionate about building impactful digital products.
        </p>

        <p> I specialize in MERN stack, Next.js, and TypeScript, and I'm currently diving into Web3 while exploring UI/UX design.</p>

        <p>I love creating user-friendly applications, contributing to open-source projects, and solving real-world problems through code.</p>
      </div>
      <div className='mt-2 flex gap-2'>
        <button className='border w-fit px-4 py-2 rounded-md cursor-pointer border-amber-600 hover:bg-white hover:text-black'>See more</button>
        <button className='border w-fit px-4 py-2 rounded-md cursor-pointer bg-blue-700 border-white hover:bg-green-500 hover:text-white'>Resume</button>
      </div>
    </div>
  )
}

export default About
