"use client";

import { useEffect, useState } from "react";
import { PaletteIcon } from "lucide-react";

const themes = [
    { name: "light", label: "Light" },
    { name: "dark", label: "Dark" },
    { name: "cupcake", label: "Cupcake" },
    { name: "emerald", label: "Emerald" },
    { name: "dracula", label: "Dracula" },
    { name: "night", label: "Night" },
];

export default function ThemeSelector() {
    const [theme, setTheme] = useState("light");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setTheme(saved);
            document.documentElement.setAttribute("data-theme", saved);
        }
    }, []);

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        setOpen(false);
    };

    return (
        <div className="fixed top-5 right-5 z-50">
            {/* Icon button */}
            <button
                onClick={() => setOpen(!open)}
                className="btn btn-circle btn-primary"
            >
                <PaletteIcon className="h-5 w-5" />
            </button>

            {/* Dropdown */}
            {open && (
                <div className="mt-2 p-2 shadow-xl bg-base-200 rounded-xl w-40 border border-base-300">
                    <ul className="space-y-1">
                        {themes.map((t) => (
                            <li key={t.name}>
                                <button
                                    className={`w-full text-left px-3 py-2 rounded-md ${theme === t.name
                                            ? "bg-primary text-primary-content"
                                            : "hover:bg-base-300"
                                        }`}
                                    onClick={() => changeTheme(t.name)}
                                >
                                    {t.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
