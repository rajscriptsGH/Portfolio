import Image from 'next/image'
import React from 'react'

const FeaturedProjects = () => {
    return (
        <div id='project'>
            <div className="max-w-5xl md:ml-10 mx-auto px-10 mt-10">
                <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {" "}
                    <span className='text-white'>Featured</span> Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project1 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3">Pictofy</h3>

                        {/* Image */}
                        <div className="relative w-full h-60 overflow-hidden rounded-2xl">
                            <Image
                                src="/pictofy.png"
                                alt="pictofy"
                                fill
                                className="object-cover rounded-2xl transition-all duration-700 hover:scale-110"

                            />
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 mt-4 mb-4">
                            A modern AI-powered web app that generates stunning images from text.
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "MongoDB", "Express", "Tailwind"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/rajscriptsGH/Pictofy"
                                target="_blank"
                                className="px-4 py-1 text-center rounded-lg border border-blue-500 text-white hover:bg-slate-300 hover:text-black transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://pictofy.vercel.app"
                                target="_blank"
                                className="px-4 py-1 rounded-lg bg-green-700 text-white hover:bg-orange-400 transition-colors"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                    {/* Project2 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3">ByteBrain</h3>

                        {/* Image */}
                        <div className="relative w-full h-60 overflow-hidden rounded-2xl">
                            <Image
                                src="/bytebrain.png"
                                alt="pictofy"
                                fill
                                className="object-cover rounded-2xl transition-all duration-700 hover:scale-110"

                            />
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 mt-4 mb-4">
                            A full-stack Second Brain application designed to help individuals to store their thoughts, ideas, and notes in a structured way
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["TypeScript", "React", "Node.js", "MongoDB", "Express", "Tailwind"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/rajscriptsGH/ByteBrain"
                                target="_blank"
                                className="px-4 py-1 rounded-lg border border-blue-500 text-white hover:bg-slate-300 hover:text-black transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://pictofy.vercel.app"
                                target="_blank"
                                className="px-4 py-1 rounded-lg bg-green-700 text-white hover:bg-orange-400 transition-colors"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                    {/* Project3 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3">AnonQuest <span className='text-[15px] font-extralight ml-3 text-gray-400'>in progress</span></h3>

                        {/* Image */}
                        <div className="relative w-full h-60 overflow-hidden rounded-2xl">
                            <Image
                                src="/anonquest.png"
                                alt="pictofy"
                                fill
                                className="object-cover rounded-2xl transition-all duration-700 hover:scale-110"

                            />
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 mt-4 mb-4">
                            AnonQuest is an open-source AMA (Ask Me Anything) web app that allows users to ask and answer questions anonymously.
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next.js", "TypeScript", "Tailwind", "Node.js", "MongoDB", "Express"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/rajscriptsGH/AnonQuest"
                                target="_blank"
                                className="px-4 py-1 rounded-lg border border-blue-500 text-white hover:bg-slate-300 hover:text-black transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://AnonQuest.vercel.app"
                                target="_blank"
                                className="px-4 py-1 rounded-lg bg-green-700 text-white hover:bg-orange-400 transition-colors"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                    {/* Project4 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3">Talksy <span className='text-[15px] font-extralight ml-3 text-gray-400'>in progress</span></h3>

                        {/* Image */}
                        <div className="relative w-full h-60 overflow-hidden rounded-2xl">
                            <Image
                                src="/talksyChat.png"
                                alt="pictofy"
                                fill
                                className="object-cover rounded-2xl transition-all duration-700 hover:scale-110"

                            />
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 mt-4 mb-4">
                            Talksy - A real-time chat and video app for fast and simple communication
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "MongoDB", "Express", "Tailwind", "Socket.io", "Stream"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/rajscriptsGH/Talksy"
                                target="_blank"
                                className="px-4 py-1 rounded-lg border border-blue-500 text-white hover:bg-slate-300 hover:text-black transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://talksy.vercel.app"
                                target="_blank"
                                className="px-4 py-1 rounded-lg bg-green-700 text-white hover:bg-orange-400 transition-colors"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <button className='border px-4 py-2 rounded-md cursor-pointer hover:border-amber-700'>See More</button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects
