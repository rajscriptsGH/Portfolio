'use client'
import React, { useState, useEffect } from 'react'
import { Home, FolderKanban, BookOpen } from "lucide-react"

const Navbar = () => {
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const handleHashChange = () => setActive(window.location.hash || "/");
        handleHashChange(); // run on load
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const linkClasses = (href: string) =>
        `group relative flex items-center gap-2 px-3 py-1 font-sans hover:text-slate-300 transition ${active === href
            ? "underline underline-offset-1 text-amber-500 bg-slate-700/60 rounded-md"
            : ""
        }`;

    return (
        <div>
            <nav className="flex justify-center items-center w-full py-3 px-16 relative z-10 mt-20">
                <ul className="fixed flex items-center py-3 rounded-lg px-4 gap-4 lg:gap-10 bg-slate-600/90 shadow-sm">

                    {/* Home */}
                    <li>
                        <a className={linkClasses("/")} href="/">
                            <Home size={20} />
                            {active === "/" && <span>Home</span>}

                            {/* Tooltip on top */}
                            {active !== "/" && (
                                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-slate-700 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                    Home
                                </span>
                            )}
                        </a>
                    </li>

                    {/* Projects */}
                    <li>
                        <a className={linkClasses("#project")} href="#project">
                            <FolderKanban size={20} />
                            {active === "#project" && <span>Projects</span>}

                            {active !== "#project" && (
                                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-slate-700 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                    Projects
                                </span>
                            )}
                        </a>
                    </li>

                    {/* Blogs */}
                    <li>
                        <a className={linkClasses("#blog")} href="#blog">
                            <BookOpen size={20} />
                            {active === "#blog" && <span>Blogs</span>}

                            {active !== "#blog" && (
                                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-slate-700 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                    Blogs
                                </span>
                            )}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
