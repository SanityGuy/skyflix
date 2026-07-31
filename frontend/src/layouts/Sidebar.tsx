import { Link, useLocation } from "react-router-dom";
import { 
    Home, 
    Map, 
    User, 
    TriangleAlert, 
    Bookmark, 
    Clock, 
    Play }
from "lucide-react";

export default function Sidebar() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    
    return (
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-50 flex-shrink-0 overflow-y-auto border-r border-zinc-800 bg-[#0f0f0f] px-3 py-3 text-white scrollbar-thin scrollbar-thumb-zinc-800">
        <div className="space-y-1">
            <Link
            to="/"
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isActive("/")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Home size={22} />
            <span>Home</span>
            </Link>

            <Link
            to="/explore"
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isActive("/explore")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Map size={22} />
            <span>Explore</span>
            </Link>

            <Link to="/radar" className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors 
                ${isActive("/radar") 
                ? "bg-zinc-800 font-semibold text-[#0095B6]" 
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"}`}>
            <TriangleAlert size={22} className="flex shrink-8" />
            <span>Live Radar</span>
            </Link>
        </div>

        <hr className="my-3 border-zinc-800" />

        <div className="space-y-1">
            <h3 className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            YOUR LIBRARY
            </h3>

            <Link
            to="/profile"
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isActive("/profile")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <User size={22} />
            <span>Profile</span>
            </Link>

            <Link
            to="/profile/favorites"
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isActive("/profile/favorites")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Bookmark size={22} />
            <span>Favorites</span>
            </Link>

            <Link
            to="/history"
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isActive("/history")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Clock size={22} />
            <span>History</span>
            </Link>
        </div>

        <hr className="my-3 border-zinc-800" />

        <div className="space-y-1">
            <h3 className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                MISC
            </h3>

            <Link
            to="/watch/demo"
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isActive("/watch/demo")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Play size={22} />
            <span>Watch Demo</span>
            </Link>

        </div>

        <hr className="my-3 border-zinc-800" />

        <div className="pt-2 px-3 pb-4">
        <div className="flex items-baseline space-x-2 mb-1.5">
            <span className="text-base font-bold tracking-tight text-white">
            Sky<span className="text-[#0095B6]">Flix</span>
            </span>
            <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
            v1.0.0
            </span>
        </div>

        <p className="text-xs text-zinc-400">
            Made by{" "}
            <a
            href="https://github.com/SanityGuy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-200 hover:text-[#0095B6] transition-colors inline-flex items-center space-x-1"
            >
            <span>SanityGuy</span>
            <svg className="h-3 w-3 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            </a>
        </p>

        <p className="mt-2 text-[11px] text-zinc-500 font-normal">
            © 2026 SkyFlix. All rights reserved.
        </p>
        </div>

        </aside>
    );
}