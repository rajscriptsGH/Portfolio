"use client"
import Image from "next/image"
import React from "react"

const Contact = () => {
    return (
        <section className="min-h-[35vh] flex flex-col items-center justify-center py-10 px-2 lg:ml-24 bg-gray-900 text-white rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Lets Work Together</h2>

            <p className="text-gray-400 mb-8 text-center max-w-2xl">
                I am open to collaborating on innovative projects and technology-driven initiatives. If you have a proposal or would like to discuss potential opportunities, feel free to get in touch!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                    href="https://cal.com/rajscripts/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white font-semibold hover:bg-gray-700 transition shadow-sm hover:shadow-md"
                >
                    <Image
                        src="/profile.jpg"
                        alt="Call"
                        fill
                        className="w-5 h-5  rounded-2xl"
                    />
                    Book a Call
                </a>
                <a
                    href="mailto:vector36razz@gmail.com"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white font-semibold hover:bg-gray-700 transition shadow-sm hover:shadow-md"
                >
                    <Image
                        src="/gmail.png"
                        alt="Mail"
                        fill
                        className="w-5 h-5 rounded-2xl"
                    />
                    Send Message
                </a>
            </div>
        </section>
    )
}

export default Contact
