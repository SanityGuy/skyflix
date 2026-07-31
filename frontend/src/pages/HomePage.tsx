import { useState } from "react";

const CATEGORIES = [
    "All",
    "Flanker Fleet",
    "Cockpit POV",
    "Dogfights",
    "Airshows",
    "Su-35 Flanker-E",
    "Su-57 Felon",
    "Aerobatics",
    "Documentaries",
];

import icon from "../assets/logo/sukhoi/android-chrome-512x512.png";

interface NavbarProps {
    logoUrl?: string;
}

export default function HomePage({logoUrl = icon}: NavbarProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className="min-h-[calc(100vh-3.5rem)] px-6 py-6 text-white">
            <div className="flex items-center justify-center space-x-2 mb-10">
                <img src={logoUrl} alt="SkyFlix Logo" className="h-12 w-auto max-w-[120px] object-contain" />
            <span className="text-5xl font-bold tracking-tight text-white">
                Sky<span className="text-[#0095B6]">Flix</span>
            </span>
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none">
            {CATEGORIES.map((category) => (
            <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === category
                    ? "bg-[#0095B6] text-black font-semibold"
                    : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                }`}
            >
                {category}
            </button>
            ))}
        </div>
        </div>
    );
}