"use client";
import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <section
            id="home"
            className="pt-36 md:pt-48 px-4 sm:px-6 lg:px-32 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-10 sm:gap-12"
        >
            {/* Profile Picture */}
            <div
                className="relative w-40 h-40 md:w-52 md:h-52 flex-shrink-0 rounded-3xl overflow-hidden shadow-lg"
                style={{ border: "2px solid var(--primary)" }}
            >
                <Image
                    src="/profile.jpg"
                    alt="profile_pic"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col text-center sm:text-left">
                <h1
                    className="text-3xl sm:text-4xl font-bold font-sans relative inline-block"
                    style={{ color: "var(--text)" }}
                >
                    Razz
                    <span
                        className="hidden absolute top-[-20px] right-[-40px] text-sm sm:text-base px-4 py-1 rounded-md sm:flex items-center gap-2 shadow-md"
                        style={{
                            background: "linear-gradient(to right, #004700 , #22c55e)",
                            color: "#fff",
                        }}
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        Available
                    </span>
                </h1>

                <p
                    className="font-light text-lg sm:text-xl mt-2"
                    style={{ color: "var(--text)" }}
                >
                    Web Developer
                </p>

                {/* Social Links */}
                <div className="flex justify-center sm:justify-start gap-3 mt-4">
                    {[
                        {
                            href: "https://github.com/rajscriptsGH",
                            icon: "/github.png",
                            label: "GitHub",
                        },
                        {
                            href: "https://x.com/rajscriptsX",
                            icon: "/x.png",
                            label: "X"
                        },
                        // {
                        //     href: "https://linkedin.com/rajscriptsin",
                        //     icon: "/linkedin.png",
                        //     label: "LinkedIn",
                        // },
                        {
                            href: "mailto:vector36razz@gmail.com",
                            icon: "/gmail.png",
                            label: "Gmail",
                        },
                        // {
                        //     href: "https://wa.me/+9779863452890",
                        //     icon: "/whatsapp.png",
                        //     label: "WhatsApp",
                        // },
                    ].map(({ href, icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            className="relative group"
                        >
                            <div
                                className="p-2 rounded-lg border transition flex items-center justify-center shadow-sm hover:shadow-md"
                                style={{
                                    backgroundColor: "var(--base-100)",
                                    borderColor: "var(--accent)",
                                }}
                            >
                                <Image src={icon} alt={label} width={24} height={24} />
                            </div>
                            <style jsx>{`
                .group:hover div {
                  border-color: var(--primary) !important;
                }
              `}</style>
                            <span
                                className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none"
                                style={{
                                    backgroundColor: "var(--primary)",
                                    color: "var(--base-100)",
                                }}
                            >
                                {label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Header;
