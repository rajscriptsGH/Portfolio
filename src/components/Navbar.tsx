import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-around items-center w-full fixed top-5 px-5 lg-px-8 py-4'>
                <a
                    className='text-3xl font-medium'
                    href="/">
                    Portfolio.
                </a>

                <ul className='border  px-3 lg:px-12 py-2 text-center rounded-2xl flex '>
                    <li className='px-2 hover:text-slate-600'><a href="#home">Home</a></li>
                    <li className='px-2 hover:text-slate-600'><a href="#work">Works</a></li>
                    <li className='px-2 hover:text-slate-600'><a href="#contact">Contact</a></li>
                </ul>
                <a href="#contact">
                    <Image
                        className='w-8'
                        src="/moon_icon.png"
                        alt='mode'
                        width={30} height={30} />
                </a>
            </nav>
        </>
    )
}

export default Navbar
