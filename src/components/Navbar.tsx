'use client'
import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-16 z-50'>

            {/* <Image
                src="/header-bg-color.png"
                alt="header"
                fill
                className="object-cover -z-10"
            /> */}


            <nav className='flex justify-between md:justify-around items-center w-full py-3 px-16 relative z-10 mt-12'>
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
