"use client"
import React from "react"

interface Blog {
    title: string
    description: string
    date: string
    link: string
}

const blogs: Blog[] = [
    {
        title: "My Journey into fullStack Development",
        description:
            "How I started learning full stack developemt, smart contracts, and integrating Web3.",
        date: "2025-04-22",
        link: "/blogs/web2-journey",
    },
    {
        title: "How I Built Pictofy",
        description:
            "A deep dive into building an AI-powered text-to-image web app using MERN + Tailwind.",
        date: "2025-08-15",
        link: "/blogs/pictofy",
    },
    {
        title: "Next.js + Tailwind = ⚡ Supercharged Apps",
        description:
            "Why I love combining Next.js and TailwindCSS for modern web development.",
        date: "2025-07-30",
        link: "/blogs/next-tailwind",
    },
    {
        title: "My Journey into Web3 Development",
        description:
            "How I started learning blockchain, smart contracts, and integrating Web3 with full-stack apps.",
        date: "2025-07-10",
        link: "/blogs/web3-journey",
    },
]

const Blogs = () => {
    return (
        <div id="blog" className="max-w-5xl mx-auto px-6 py-16">
            {/* Heading */}
            <h2 className="text-2xl font-bold mb-8 text-primary">
                <span className="text-base-content">My</span> Blogs
            </h2>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog, idx) => (
                    <div
                        key={idx}
                        className="p-6 rounded-xl border border-base-300 bg-base-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg transition"
                    >
                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2 text-base-content">
                            {blog.title}
                        </h3>

                        {/* Date */}
                        <p className="text-sm text-base-content/70 mb-3">
                            {new Date(blog.date).toDateString()}
                        </p>

                        {/* Description */}
                        <p className="text-base-content/80 mb-4">{blog.description}</p>

                        {/* Read More */}
                        <a
                            href={blog.link}
                            className="btn btn-sm btn-outline btn-primary"
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
