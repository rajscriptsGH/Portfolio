'use client'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='mt-15 flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-center font-semibold font-Ovo'>About</h1>

      <div className='flex flex-col md:flex-row gap-10 text-center items-center justify-center mt-10'>
        <div className="relative w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80">
          <Image
            src="/profile.jpg"
            alt="profile_pic"
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        <div className='max-w-[300px] md:max-w-[400px] text-center'>
          <p>Full Stack Developer and student passionate about turning ideas into functional products. I enjoy solving problems, creating user-friendly experiences, and building solutions with real-world impact.
          </p>
          <div className='flex gap-10 mt-5'>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
