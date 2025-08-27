import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12'>
            <div>
                <Image
                    src="/profile.jpg"
                    alt='profile_pic'
                    width={140}
                    height={140}
                    className='rounded-full'
                />
            </div>
            <div className="flex flex-col items-center mt-4 text-center space-y-3">
                <p className="text-lg">👋 Hi, I'm <span className="font-semibold">Razz</span></p>
                <h1 className="text-3xl md:text-5xl font-bold">
                    Full Stack Developer
                </h1>
                <p className="text-gray-300 max-w-xl">
                    I create scalable apps and intuitive interfaces by combining design thinking with technical expertise
                </p>
            </div>

            <div>
                <button>Contact</button>
                <button>Resume</button>
            </div>

        </div>
    )
}

export default Header
