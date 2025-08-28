'use client'
import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <div className='absolute top-0 left-0 w-full h-16 -z-10'>
                <Image
                    src="/header-bg-color.png"
                    alt="header"
                    fill
                    className="object-cover"
                />

            </div>
            <nav className='flex justify-between md:justify-around items-center w-full py-3 px-16 z-50'>
                <div>
                    <a
                        className='text-2xl md:text-3xl text-black font-semibold'
                        href="/">
                        Portfolio.
                    </a>
                </div>

                <ul className='flex items-center py-2 rounded-full px-4 gap-2 lg:gap-10 bg-slate-600/90 shadow-sm'>
                    <li>
                        <a className='px-2 hover:text-slate-300 font-sans' href="#home">Home</a>
                    </li>
                    <li>
                        <a className='px-2 hover:text-slate-300 font-sans' href="#work">
                            Project
                        </a>
                    </li>
                    <li>
                        <a className='px-2 hover:text-slate-300 font-sans' href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
