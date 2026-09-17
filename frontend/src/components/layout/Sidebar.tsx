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
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import nameUrl from "../../assets/logo/skyflix/skyflix_name_dark.png";

interface SidebarProps {
  isCollapsed?: boolean;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function Sidebar({ 
  isCollapsed = false, 
  isMobileOpen = false, 
  onCloseMobile 
}: SidebarProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const sidebarContent = (
    <>
      <div className="space-y-1">
        <Link
          to="/"
          onClick={onCloseMobile}
          title={isCollapsed ? "Home" : undefined}
          className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
            isCollapsed ? "md:justify-center md:px-0" : ""
          } ${
            isActive("/")
              ? "bg-zinc-800 font-semibold text-[#0095B6]"
              : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
          }`}
        >
          <Home size={22} className="flex-shrink-0" />
          {(!isCollapsed || isMobileOpen) && <span className="truncate">Home</span>}
        </Link>

        <Link
          to="/radar"
          onClick={onCloseMobile}
          title={isCollapsed ? "Live Radar" : undefined}
          className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
            isCollapsed ? "md:justify-center md:px-0" : ""
          } ${
            isActive("/radar")
              ? "bg-zinc-800 font-semibold text-[#0095B6]"
              : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
          }`}
        >
          <TriangleAlert size={22} className="flex-shrink-0" />
          {(!isCollapsed || isMobileOpen) && <span className="truncate">Live Radar</span>}
        </Link>
      </div>

      <hr className="my-3 border-zinc-800" />

      <div className="space-y-1">
        {(!isCollapsed || isMobileOpen) && (
          <h3 className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Your Library
          </h3>
        )}

        <Link
          to="/channel/@sanityguy/"
          onClick={onCloseMobile}
          title={isCollapsed ? "Profile" : undefined}
          className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
            isCollapsed ? "md:justify-center md:px-0" : ""
          } ${
            isActive("/channel/@sanityguy/")
              ? "bg-zinc-800 font-semibold text-[#0095B6]"
              : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
          }`}
        >
          <User size={22} className="flex-shrink-0" />
          {(!isCollapsed || isMobileOpen) && <span className="truncate">Your Channel</span>}
        </Link>

        <Link
          to="/channel/@sanityguy/history"
          onClick={onCloseMobile}
          title={isCollapsed ? "History" : undefined}
          className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
            isCollapsed ? "md:justify-center md:px-0" : ""
          } ${
            isActive("/channel/@sanityguy/history")
              ? "bg-zinc-800 font-semibold text-[#0095B6]"
              : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
          }`}
        >
          <Clock size={22} className="flex-shrink-0" />
          {(!isCollapsed || isMobileOpen) && <span className="truncate">History</span>}
        </Link>

        <Link
          to="/channel/@sanityguy/videos"
          onClick={onCloseMobile}
          title={isCollapsed ? "Liked Videos" : undefined}
          className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
            isCollapsed ? "md:justify-center md:px-0" : ""
          } ${
            isActive("/channel/@sanityguy/videos")
              ? "bg-zinc-800 font-semibold text-[#0095B6]"
              : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
          }`}
        >
          <ThumbsUp size={22} className="flex-shrink-0" />
          {(!isCollapsed || isMobileOpen) && <span className="truncate">Liked Videos</span>}
        </Link>

        <Link
          to="/channel/@sanityguy/downloads"
          onClick={onCloseMobile}
          title={isCollapsed ? "Downloads" : undefined}
          className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
            isCollapsed ? "md:justify-center md:px-0" : ""
          } ${
            isActive("/channel/@sanityguy/downloads")
              ? "bg-zinc-800 font-semibold text-[#0095B6]"
              : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
          }`}
        >
          <Download size={22} className="flex-shrink-0" />
          {(!isCollapsed || isMobileOpen) && <span className="truncate">Downloads</span>}
        </Link>
      </div>

      <hr className="my-3 border-zinc-800" />

      <div className="space-y-1">
        {(!isCollapsed || isMobileOpen) && (
          <h3 className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Misc
          </h3>
        )}

        <Link
          to="/watch?v=demo"
          onClick={onCloseMobile}
          title={isCollapsed ? "Watch Demo" : undefined}
          className={`flex items-center space-x-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
            isCollapsed ? "md:justify-center md:px-0" : ""
          } ${
            isActive("/watch?v=demo")
              ? "bg-zinc-800 font-semibold text-[#0095B6]"
              : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
          }`}
        >
          <Play size={22} className="flex-shrink-0" />
          {(!isCollapsed || isMobileOpen) && <span className="truncate">Watch Demo</span>}
        </Link>

        {isCollapsed && !isMobileOpen && (
          <Link
            to="/t/terms"
            title="Terms of Service"
            className="flex items-center justify-center rounded-xl py-2.5 text-zinc-400 hover:bg-zinc-800/60 hover:text-white transition-colors"
          >
            <Scale size={22} />
          </Link>
        )}
      </div>

      {(!isCollapsed || isMobileOpen) && (
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
                <strong className="text-zinc-400 font-semibold">Disclaimer:</strong> Independent project.
              </p>
            </div>

            <div className="pt-1 space-y-2">
              <Link
                to="/t/terms"
                onClick={onCloseMobile}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 text-[11px] font-medium text-zinc-300 hover:bg-zinc-800 transition-all"
              >
                <FileText size={13} className="text-[#0095B6]" />
                <span>Terms of Service</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={onCloseMobile}
        >
          <aside 
            className="h-full w-64 bg-[#0f0f0f] p-3 text-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-zinc-800">
              <span className="font-semibold text-lg text-white">Menu</span>
              <button onClick={onCloseMobile} className="p-1 text-zinc-400 hover:text-white">
                <X size={22} />
              </button>
            </div>
            {sidebarContent}
          </aside>
        </div>
      )}

      <aside
        className={`hidden md:block sticky top-14 h-[calc(100vh-3.5rem)] flex-shrink-0 overflow-y-auto border-r border-zinc-800 bg-[#0f0f0f] px-3 py-3 text-white scrollbar-thin transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-16" : "w-52"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}