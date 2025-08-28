'use client'
import React from 'react'

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 px-4 mt-10">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <p className="text-gray-400 mb-8 text-center max-w-xl">
                Schedule a 30-minute call with me directly through my calendar.
            </p>

            {/* Cal.com embed */}
            <div className="w-full max-w-3xl">
                <iframe
                    src="https://cal.com/rajscripts/30min"
                    style={{ width: "120%", height: "600px", border: "0" }}
                    frameBorder="0"
                    scrolling="yes"
                ></iframe>
            </div>
        </div>
    )
}

export default Contact
