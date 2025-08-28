'use client'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div id='home' className='flex justify-start items-center mt-30 lg:ml-32 md:ml-[25px] gap-4'>
            <div className="relative w-40 h-40 md:w-50 md:h-45">
                <Image
                    src="/profile.jpg"
                    alt="profile_pic"
                    fill
                    className="object-cover rounded-3xl"
                />
            </div>
            <div className="flex flex-col">
                <h1 className='text-2xl sm:text-4xl font-sans font-bold'>Raj Yadav
                    <span className='relative top-[-15px] right-[-10px] text-[15px]  text-green-500 border px-[10px] py-[5px] rounded-md'>Available</span>
                </h1>
                <p className='font-sans font-light'>Software Engineer</p>
                <div className='flex gap-3 mt-2'>
                    <a href="https://github.com/rajscriptsGH" target="_blank" className='relative group'>
                        <div className="p-2 border border-slate-500 rounded-md hover:border-slate-200 transition">
                            <Image
                                src="/github.png"
                                alt="github"
                                width={24} height={24} />
                        </div>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-200 text-black text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                            GitHub
                        </span>
                    </a>
                    <a href="https://x.com/rajscriptsX" target="_blank" className='relative group'>
                        <div className="p-2 border border-slate-500 rounded-md hover:border-slate-200 transition">
                            <Image
                                src="/x.png"
                                alt="github"
                                width={24} height={24} />
                        </div>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-200 text-black text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                            X
                        </span>
                    </a>
                    <a href="https://linkedin.com/rajscriptsin" target="_blank" className='relative group'>
                        <div className="p-2 border border-slate-500 rounded-md hover:border-slate-200 transition">
                            <Image
                                src="/linkedin.png"
                                alt="github"
                                width={24} height={24} />
                        </div>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-200 text-black text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                            Linkedin
                        </span>
                    </a>
                    <a href="mailto:vector36razz@gmail.com" target="_blank" className='relative group'>
                        <div className="p-2 border border-slate-500 rounded-md hover:border-slate-200 transition">
                            <Image
                                src="/gmail.png"
                                alt="github"
                                width={24} height={24} />
                        </div>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-200 text-black text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                            Gmail
                        </span>
                    </a>
                    <a href="https://wa.me/+9779863452890" target="_blank" className='relative group'>
                        <div className="p-2 border border-slate-500 rounded-md hover:border-slate-200 transition">
                            <Image
                                src="/whatsapp.png"
                                alt="github"
                                width={24} height={24} />
                        </div>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-200 text-black text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                            Whatsapp
                        </span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Header
