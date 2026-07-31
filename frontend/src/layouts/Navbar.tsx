import { Link } from "react-router-dom";
import logoIcon from "../assets/logo/sukhoi/favicon.ico";

interface NavbarProps {
    logoUrl?: string;
}

export default function Navbar({ logoUrl = logoIcon }: NavbarProps) {
    return (
        <nav className="sticky top-0 z-50 flex h-15 items-center justify-between border-b border-zinc-800 bg-[#0f0f0f] px-4 text-white">
        <div className="flex items-center space-x-3">
            <button
            className="rounded-full p-2 text-zinc-300 hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Sidebar"
            >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>

            <Link to="/" className="group flex items-center space-x-2">
            <img src={logoUrl} alt="SkyFlix Logo" className="h-7 w-auto max-w-[120px] object-contain" />
            <span className="text-xl font-bold tracking-tight text-white">
                Sky<span className="text-[#0095B6]">Flix</span>
            </span>
            </Link>
        </div>

        <div className="flex max-w-2xl flex-1 items-center justify-center px-4">
            <form className="flex w-full max-w-lg items-center">
            <div className="flex w-full items-center overflow-hidden rounded-full border border-zinc-700 bg-zinc-900 focus-within:border-[#0095B6] focus-within:ring-1 focus-within:ring-[#0095B6] transition-all">
                <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent px-5 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none"
                />
                <button
                type="submit"
                aria-label="Submit Search"
                className="flex items-center justify-center border-l border-zinc-700 bg-zinc-800 px-5 py-2 text-zinc-300 hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
                >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                </svg>
                </button>
            </div>
            </form>

            <button
            type="button"
            aria-label="Search with voice"
            className="ml-3 hidden sm:flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
            >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            </button>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
            <button
            aria-label="Create content"
            className="flex items-center space-x-2 rounded-full bg-zinc-800 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
            >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden md:inline">Create</span>
            </button>

            <button
            aria-label="Notifications"
            className="relative rounded-full p-2 text-zinc-300 hover:bg-zinc-800 hover:text-[#0095B6] transition-colors"
            >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#0095B6]" />
            </button>

            <button
            aria-label="User Account"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-[#0095B6] hover:ring-2 hover:ring-[#0095B6]/30 transition-all overflow-hidden"
            >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
            </button>
        </div>
        </nav>
    );
}