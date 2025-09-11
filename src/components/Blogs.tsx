'use client'
import React from "react"

interface Blog {
    title: string
    description: string
    date: string
    link: string
}

const blogs: Blog[] = [
    {
        title: "How I Built Pictofy",
        description: "A deep dive into building an AI-powered text-to-image web app using MERN + Tailwind.",
        date: "2025-08-15",
        link: "/blogs/pictofy",
    },
    {
        title: "Next.js + Tailwind = ⚡ Supercharged Apps",
        description: "Why I love combining Next.js and TailwindCSS for modern web development.",
        date: "2025-07-30",
        link: "/blogs/next-tailwind",
    },
    {
        title: "My Journey into Web3 Development",
        description: "How I started learning blockchain, smart contracts, and integrating Web3 with full-stack apps.",
        date: "2025-07-10",
        link: "/blogs/web3-journey",
    },
]

const Blogs = () => {
    return (
        <div id="blog" className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                <span className="text-white">My</span> Blogs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog, idx) => (
                    <div
                        key={idx}
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>

                        {/* Date */}
                        <p className="text-sm text-gray-400 mb-3">{new Date(blog.date).toDateString()}</p>

                        {/* Description */}
                        <p className="text-gray-400 mb-4">{blog.description}</p>

                        {/* Read More */}
                        <a
                            href={blog.link}
                            className="px-4 py-1 rounded-lg border border-blue-500 text-white hover:bg-blue-600 transition-colors"
                        >
                            Read More →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs
