'use client'
import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (
        <div>

            <nav className='flex justify-center items-center w-full py-3 px-16 relative z-10 mt-20'>
                <ul className='flex items-center py-3 rounded-lg px-4 gap-2 lg:gap-10 bg-slate-600/90 shadow-sm'>
                    <li>
                        <a className='px-2 hover:text-slate-300 font-sans' href="#home">Home</a>
                    </li>
                    <li>
                        <a className='px-2 hover:text-slate-300 font-sans' href="#project">
                            Project
                        </a>
                    </li>
                    <li>
                        <a className='px-2 hover:text-slate-300 font-sans underline underline-offset-1 text-amber-500'
                            href="#contact">
                            Contact
                        </a>
                    </li>


                </ul>
            </nav>
        </div>
    )
}

export default Navbar
