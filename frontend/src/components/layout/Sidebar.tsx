import { Link, useLocation } from "react-router-dom";
import {
    Home,
    Map,
    User,
    TriangleAlert,
    Bookmark,
    Clock,
    Play,
    ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface SidebarProps {
    isCollapsed?: boolean;
}

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
            to="/explore"
            title={isCollapsed ? "Explore" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/explore")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Map size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Explore</span>}
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
            to="/profile"
            title={isCollapsed ? "Profile" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/profile")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <User size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Profile</span>}
            </Link>

            <Link
            to="/profile/favorites"
            title={isCollapsed ? "Favorites" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/profile/favorites")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Bookmark size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Favorites</span>}
            </Link>

            <Link
            to="/history"
            title={isCollapsed ? "History" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/history")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Clock size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">History</span>}
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
            to="/watch/demo"
            title={isCollapsed ? "Watch Demo" : undefined}
            className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                isCollapsed ? "justify-center px-0" : ""
            } ${
                isActive("/watch/demo")
                ? "bg-zinc-800 font-semibold text-[#0095B6]"
                : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            }`}
            >
            <Play size={22} className="flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Watch Demo</span>}
            </Link>
        </div>

        {!isCollapsed && (
            <>
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
                    className="font-medium text-zinc-200 hover:text-[#0095B6] hover:scale-[1.02] active:scale-[0.98] transition-colors inline-flex items-center space-x-1"
                >
                    <FaGithub size={15} className="ml-1 inline-flex items-center" />
                    <span>SanityGuy</span>
                    <ExternalLink size={12} className="ml-0.1 inline-flex items-center" />
                </a>
                </p>

                <p className="mt-2 text-[11px] text-zinc-500 font-normal">
                © 2026 SkyFlix. All rights reserved.
                </p>
            </div>
            </>
        )}
        </aside>
    );
}