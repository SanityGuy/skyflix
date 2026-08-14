import { Link, useLocation } from "react-router-dom";
import {
    Home,
    User,
    TriangleAlert,
    ThumbsUp,
    Download,
    Clock,
    Play,
    ExternalLink,
    Scale,
    FileText,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface SidebarProps {
    isCollapsed?: boolean;
}

import nameUrl from "../../assets/logo/skyflix/skyflix_name_dark.png";

export default function Sidebar({ isCollapsed = false }: SidebarProps) {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside
        className={`sticky top-14 h-[calc(100vh-3.5rem)] flex-shrink-0 overflow-y-auto border-r border-zinc-800 bg-[#0f0f0f] px-3 py-3 text-white scrollbar-thin scrollbar-thumb-zinc-800 transition-all duration-300 ease-in-out ${
            isCollapsed ? "w-16" : "w-52"
        }`}
        >
        <div className="space-y-1">
            <Link
            to="/"
            title={isCollapsed ? "Home" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Home size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Home</span>}
            </Link>

            <Link
            to="/radar"
            title={isCollapsed ? "Live Radar" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/radar")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <TriangleAlert size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Live Radar</span>}
            </Link>
        </div>

        <hr className="my-3 border-zinc-800" />

        <div className="space-y-1">
            {!isCollapsed && (
            <h3 className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Your Library
            </h3>
            )}

            <Link
            to="/channel/@sanityguy/"
            title={isCollapsed ? "Profile" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/channel/@sanityguy/")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <User size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Your Channel</span>}
            </Link>

            <Link
            to="/channel/@sanityguy/history"
            title={isCollapsed ? "History" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/channel/@sanityguy/history")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Clock size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">History</span>}
            </Link>

            <Link
            to="/channel/@sanityguy/videos"
            title={isCollapsed ? "Liked Videos" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/channel/@sanityguy/videos")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <ThumbsUp size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Liked Videos</span>}
            </Link>

            <Link
            to="/channel/@sanityguy/downloads"
            title={isCollapsed ? "Downloads" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/channel/@sanityguy/downloads")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Download size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Downloads</span>}
            </Link>
        </div>

        <hr className="my-3 border-zinc-800" />

        <div className="space-y-1">
            {!isCollapsed && (
            <h3 className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Misc
            </h3>
            )}

            <Link
            to="/watch?v=demo"
            title={isCollapsed ? "Watch Demo" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/watch?v=demo")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Play size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Watch Demo</span>}
            </Link>

            {isCollapsed && (
            <Link
                to="/terms"
                title="Terms of Service"
                className="flex items-center justify-center rounded-xl py-2.5 text-zinc-400 hover:bg-zinc-800/60 hover:text-white transition-colors"
            >
                <Scale size={22} />
            </Link>
            )}
        </div>

        {!isCollapsed && (
            <>
            <hr className="my-3 border-zinc-800" />

            <div className="pt-1 px-2 pb-4 space-y-3">
                <div>
                <div className="flex items-center gap-1.5 mb-1">
                    <img
                    src={nameUrl}
                    alt="SkyFlix Logo"
                    className="h-9 w-auto max-w-[100px] object-contain"
                    />
                    <span className="rounded bg-zinc-800/90 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 border border-zinc-700/50">
                    v1.0.0
                    </span>
                </div>

                <p className="text-xs text-zinc-400">
                    Created by{" "}
                    <a
                    href="https://github.com/SanityGuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-200 hover:text-[#0095B6] transition-colors inline-flex items-center gap-1"
                    >
                    <FaGithub size={13} />
                    <span>SanityGuy</span>
                    <ExternalLink size={10} className="text-zinc-500" />
                    </a>
                </p>
                </div>

                <div className="space-y-1.5 text-[10px] leading-relaxed text-zinc-500">
                <p>
                    <strong className="text-zinc-400 font-semibold">Disclaimer:</strong> Independent project. Not affiliated, endorsed, or connected with YouTube or Google LLC.
                </p>
                <p>
                    Provided <span className="font-mono text-zinc-400">"AS IS"</span> without warranties. All trademarks belong to their respective owners.
                </p>
                </div>

                <div className="pt-1 space-y-2">
                <Link
                    to="/terms"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 text-[11px] font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all active:scale-98"
                >
                    <FileText size={13} className="text-[#0095B6]" />
                    <span>Terms of Service</span>
                </Link>

                <p className="text-[10px] text-zinc-600 font-mono text-center">
                    © 2026 SkyFlix. All rights reserved.
                </p>
                </div>
            </div>
            </>
        )}
        </aside>
    );
    }