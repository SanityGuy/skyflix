import { Link, useLocation } from "react-router-dom";
import { Home, TriangleAlert, PlusCircle, Download, User } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-14 items-center justify-around border-t border-zinc-800 bg-[#0f0f0f] text-zinc-400 md:hidden">
      <Link
        to="/"
        className={`flex flex-col items-center gap-1 text-[10px] ${
          isActive("/") ? "text-[#0095B6]" : "hover:text-white"
        }`}
      >
        <Home size={20} />
        <span>Home</span>
      </Link>

      <Link
        to="/radar"
        className={`flex flex-col items-center gap-1 text-[10px] ${
          isActive("/radar") ? "text-[#0095B6]" : "hover:text-white"
        }`}
      >
        <TriangleAlert size={20} />
        <span>Radar</span>
      </Link>

      <button
        aria-label="Create content"
        className="flex flex-col items-center justify-center text-[#0095B6] active:scale-95 transition-transform"
      >
        <PlusCircle size={32} />
      </button>

      <Link
        to="/channel/@sanityguy/downloads"
        className={`flex flex-col items-center gap-1 text-[10px] ${
          isActive("/channel/@sanityguy/downloads") ? "text-[#0095B6]" : "hover:text-white"
        }`}
      >
        <Download size={20} />
        <span>Downloads</span>
      </Link>

      <Link
        to="/channel/@sanityguy/"
        className={`flex flex-col items-center gap-1 text-[10px] ${
          isActive("/channel/@sanityguy/") ? "text-[#0095B6]" : "hover:text-white"
        }`}
      >
        <User size={20} />
        <span>You</span>
      </Link>
    </nav>
  );
}