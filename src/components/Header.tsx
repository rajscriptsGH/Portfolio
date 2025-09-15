'use client'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <section
            id="home"
            className="pt-36 md:pt-48 px-4 sm:px-6 lg:px-32 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-10 sm:gap-12"
        >
            {/* Profile Picture */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 flex-shrink-0 rounded-3xl overflow-hidden shadow-lg">
                <Image
                    src="/profile.jpg"
                    alt="profile_pic"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold font-sans text-gray-900 dark:text-gray-500 relative inline-block">
                    Razz
                    <span className="hidden absolute top-[-20px] right-[50px] text-sm sm:text-base px-4 py-1 rounded-md bg-gradient-to-r from-green-800 to-green-500 text-white sm:flex items-center gap-2 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        Available
                    </span>
                </h1>

                <p className="font-light text-gray-900 dark:text-gray-500 text-lg sm:text-xl mt-2">
                    Software Engineer
                </p>

                {/* Social Links */}
                <div className="flex justify-center sm:justify-start gap-3 mt-4">
                    {[
                        { href: "https://github.com/rajscriptsGH", icon: "/github.png", label: "GitHub" },
                        { href: "https://x.com/rajscriptsX", icon: "/x.png", label: "X" },
                        { href: "https://linkedin.com/rajscriptsin", icon: "/linkedin.png", label: "LinkedIn" },
                        { href: "mailto:vector36razz@gmail.com", icon: "/gmail.png", label: "Gmail" },
                        { href: "https://wa.me/+9779863452890", icon: "/whatsapp.png", label: "WhatsApp" },
                    ].map(({ href, icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            className="relative group"
                        >
                            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-blue-400 transition flex items-center justify-center shadow-sm hover:shadow-md">
                                <Image src={icon} alt={label} width={24} height={24} />
                            </div>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                {label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Header
