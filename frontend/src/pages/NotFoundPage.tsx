import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
    Radio, 
    Search, 
    Home, 
    AlertTriangle 
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function NotFoundPage() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
        navigate(`/results?search_query=${encodeURIComponent(query)}`, { replace: true });
        }
    };

    return (
        <div className="flex min-h-[75vh] w-full flex-col items-center justify-center px-4 py-12 text-center text-zinc-300">
        <div className="relative mb-8 flex items-center justify-center">
            <div className="absolute h-40 w-40 rounded-full border border-[#0095B6]/20 animate-ping pointer-events-none" />
            <div className="absolute h-32 w-32 rounded-full border border-dashed border-[#0095B6]/40 animate-[spin_12s_linear_infinite]" />
            <div className="absolute h-24 w-24 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm" />
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 border border-[#0095B6]/60 text-[#0095B6] shadow-lg shadow-[#0095B6]/20">
            <Radio className="h-8 w-8 animate-pulse text-[#0095B6]" />
            </div>
        </div>

        <div className="inline-flex items-center space-x-2 rounded-full bg-zinc-900/90 border border-zinc-800 px-3 py-1 text-xs font-mono text-[#0095B6] mb-3">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
            <span>404 // PAGE_NOT_FOUND</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Navigation Lost!
        </h1>

        <p className="mt-2.5 max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed">
            The flight path or video frequency you requested was not detected!
        </p>

        <form 
            onSubmit={handleSearch}
            className="mt-6 flex w-full max-w-md items-center overflow-hidden rounded-full border border-zinc-800 bg-zinc-900/90 focus-within:border-[#0095B6] focus-within:ring-1 focus-within:ring-[#0095B6] transition-all"
        >
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search SkyFlix for videos or aircraft..."
            className="w-full bg-transparent px-5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none"
            />
            <button
            type="submit"
            aria-label="Search"
            className="flex items-center justify-center border-l border-zinc-800 bg-zinc-800/80 px-5 py-2.5 text-zinc-300 hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
            >
            <Search size={18} />
            </button>
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
            to="/"
            className="flex items-center space-x-2 rounded-full bg-[#0095B6] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#00819e] hover:shadow-lg hover:shadow-[#0095B6]/25 active:scale-95"
            >
            <Home size={18} />
            <span>Return Home</span>
            </Link>

            <a
            href="https://github.com/SanityGuy/skyflix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-full bg-zinc-800/80 border border-zinc-700/80 px-5 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white transition-all active:scale-95"
            >
            <FaGithub size={18} />
            <span>Report Issue</span>
            </a>
        </div>
        </div>
    );
}