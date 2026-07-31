import { Link, useLocation } from "react-router-dom";

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
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
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
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Explore</span>
            </Link>

            <Link
            to="/radar"
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isActive("/radar")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span>Live Radar</span>
            </Link>
        </div>

        <hr className="my-3 border-zinc-800" />

        <div className="space-y-1">
            <h3 className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Library
            </h3>

            <Link
            to="/profile"
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isActive("/profile")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
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
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
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
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>History</span>
            </Link>

            <Link
            to="/watch/demo"
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isActive("/watch/demo")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Watch Demo</span>
            </Link>
        </div>

        <hr className="my-3 border-zinc-800" />

        </aside>
    );
}