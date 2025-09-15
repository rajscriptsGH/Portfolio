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

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = href === "/" ? document.body : document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(href);
        }
    }

    const linkClasses = (href: string) =>
        `group relative flex items-center gap-2 px-3 py-1 font-sans transition-all
        ${active === href
            ? "text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md"
            : "text-gray-200 hover:text-white"
        }`;

    return (
        <nav className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex justify-center w-auto px-4 py-3 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg">
            <ul className="flex items-center gap-4 lg:gap-10">

                {/* Home */}
                <li>
                    <a
                        className={linkClasses("/")}
                        href="/"
                        onClick={(e) => handleClick(e, "/")}
                    >
                        <Home size={20} />
                        {active === "/" && <span className="hidden lg:inline font-semibold">Home</span>}

                        {active !== "/" && (
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                Home
                            </span>
                        )}
                    </a>
                </li>

                {/* Projects */}
                <li>
                    <a
                        className={linkClasses("#project")}
                        href="#project"
                        onClick={(e) => handleClick(e, "#project")}
                    >
                        <FolderKanban size={20} />
                        {active === "#project" && <span className="hidden lg:inline font-semibold">Projects</span>}

                        {active !== "#project" && (
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                Projects
                            </span>
                        )}
                    </a>
                </li>

                {/* Blogs */}
                <li>
                    <a
                        className={linkClasses("#blog")}
                        href="#blog"
                        onClick={(e) => handleClick(e, "#blog")}
                    >
                        <BookOpen size={20} />
                        {active === "#blog" && <span className="hidden lg:inline font-semibold">Blogs</span>}

                        {active !== "#blog" && (
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                Blogs
                            </span>
                        )}
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
