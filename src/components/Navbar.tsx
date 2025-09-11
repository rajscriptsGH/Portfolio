'use client'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const handleHashChange = () => setActive(window.location.hash || "/");
        handleHashChange(); // run on load
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const linkClasses = (href: string) =>
        `px-2 font-sans hover:text-slate-300 ${active === href
            ? "underline underline-offset-1 text-amber-500 bg-slate-700/60 rounded-md"
            : ""
        }`;

    return (
        <div>
            <nav className='flex justify-center items-center w-full py-3 px-16 relative z-10 mt-20'>
                <ul className='fixed flex items-center py-3 rounded-lg px-4 gap-2 lg:gap-10 bg-slate-600/90 shadow-sm'>
                    <li>
                        <a className={linkClasses("/")} href="/">Home</a>
                    </li>
                    <li>
                        <a className={linkClasses("#project")} href="#project">Project</a>
                    </li>
                    <li>
                        <a className={linkClasses("#blog")} href="#blog">Blogs</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
