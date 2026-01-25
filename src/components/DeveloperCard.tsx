"use client";

import Image from "next/image";
import React from "react";

const DeveloperCard = () => {
    return (
        <section
            id="home"
            className="pt-36 md:pt-48 px-4 sm:px-6 lg:px-32 flex justify-center"
        >
            <div className="w-full max-w-5xl rounded-2xl border border-white/10  backdrop-blur-xl p-6 md:p-8 text-white">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/profile.jpg"
                            alt="Raj Yadav"
                            width={72}
                            height={72}
                            className="rounded-full object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex-1">
                        {/* Name + Status */}
                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="text-2xl font-semibold">Razz</h1>

                            <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                                <span className="h-2 w-2 rounded-full bg-green-400" />
                                Available for work
                            </span>
                        </div>

                        <p className="text-white/60 mt-1">Software Tinkerer</p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-6 text-sm text-white/70">
                            <Item label="Full-Stack Developer" />
                            <Item label="Working Remotely" />
                            <Item label="Building Karf8ixLab" />
                            <Item label="India / Remote" />
                            <Item label="vector36razz@gmail.com" />
                            <Item label="he/him" />
                        </div>

                        {/* Description */}
                        <p className="mt-6 text-white/70 leading-relaxed max-w-3xl">
                            I build interactive web applications using{" "}
                            <Tech>TypeScript</Tech>, <Tech>React</Tech>, <Tech>Next.js</Tech>{" "}
                            and <Tech>Tailwind CSS</Tech>. Focused on clean UI, scalable
                            systems, and currently exploring <Tech>Web3</Tech> and{" "}
                            <Tech>DevOps</Tech>.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-3 mt-8">
                            <Action href="/resume.pdf">Resume</Action>
                            <Action href="mailto:vector36razz@gmail.com">Contact</Action>
                            <Icon href="https://x.com/rajscriptsX" label="X" />
                            <Icon href="https://github.com/rajscriptsGH" label="GitHub" />
                            <Icon href="https://linkedin.com/in/rajscriptsin" label="LinkedIn" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeveloperCard;

/* ---------- Small Components ---------- */

const Item = ({ label }: { label: string }) => (
    <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span>{label}</span>
    </div>
);

const Tech = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        {children}
    </span>
);

const Action = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => (
    <a
        href={href}
        className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition"
    >
        {children}
    </a>
);

const Icon = ({
    href,
    label,
}: {
    href: string;
    label: string;
}) => (
    <a
        href={href}
        aria-label={label}
        className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/20 text-white/70 hover:bg-white/10 transition"
    >
        {label[0]}
    </a>
);
