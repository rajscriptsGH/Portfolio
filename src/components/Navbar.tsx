import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <nav>
                <a href="/">Portfolio.</a>

                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#work">Works</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="#contact">
                    <Image src="/moon_icon" alt='mode' />
                </a>
            </nav>
        </>
    )
}

export default Navbar
