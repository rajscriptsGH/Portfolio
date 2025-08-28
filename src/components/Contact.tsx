'use client'
import React from 'react'

const Contact = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <p className="text-gray-400 mb-8 text-center max-w-xl">
                Book a free 30-minute session to bring clarity to your vision and kickstart our journey together.
            </p>

            <a
                href="https://cal.com/rajscripts/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
                Book a Call →
            </a>
        </div>
    )
}

export default Contact

