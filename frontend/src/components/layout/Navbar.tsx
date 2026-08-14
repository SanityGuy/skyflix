import { Link } from "react-router-dom";
import { 
    ListCollapse, 
    Search, 
    Mic, 
    Upload, 
    Bell, 
    User 
} from "lucide-react";
import logoIcon from "../../assets/logo/skyflix/skyflix_logo_dark.png";

interface NavbarProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    logoUrl?: string;
    onToggleSidebar?: () => void;
}

export default function Navbar({ 
    searchQuery, 
    onSearchChange, 
    logoUrl = logoIcon,
    onToggleSidebar
}: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 h-14 w-full border-b border-zinc-800/80 bg-[#0f0f0f]">
        <div className="flex w-full h-0.5 items-center justify-between bg-zinc-800 active-bg-[#0095B6]/50"></div>
        <nav className="flex h-full items-center justify-between px-4 text-white">
            <div className="flex items-center space-x-3">
            <button
                onClick={onToggleSidebar}
                className="rounded-full p-2 text-zinc-300 hover:bg-zinc-800 transition-colors"
                aria-label="Toggle Sidebar"
            >
                <ListCollapse size={22} />
            </button>

            <Link to="/" className="group flex items-center space-x-2">
                <img src={logoUrl} alt="SkyFlix Logo" className="h-18 w-auto max-w-[120px] object-contain" />
            </Link>
            </div>

            <div className="flex max-w-2xl flex-1 items-center justify-center px-4">
            <form 
                className="flex w-full max-w-lg items-center"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="flex w-full items-center overflow-hidden rounded-full border border-zinc-700/80 bg-zinc-900 focus-within:border-[#0095B6] focus-within:ring-1 focus-within:ring-[#0095B6] transition-all">
                <input
                    type="text"
                    placeholder="Search videos, aircraft, creators..."
                    className="w-full bg-transparent px-5 py-1.5 text-sm text-white placeholder-zinc-400 focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <Link to={`/results?search_query=${searchQuery}`}>
                    <button
                        type="submit"
                        aria-label="Submit Search"
                        className="flex items-center justify-center border-l border-zinc-700/80 bg-zinc-800/80 px-5 py-1.5 text-zinc-300 hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
                    >
                        <Search size={22} />
                    </button>
                </Link>
                </div>
            </form>

            <button
                type="button"
                aria-label="Search with voice"
                className="ml-3 hidden sm:flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
            >
                <Mic size={22} />
            </button>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-2">
            <button
                aria-label="Create content"
                className="relative rounded-full p-2 text-zinc-300 hover:bg-zinc-800 hover:text-[#0095B6] transition-colors"
            >
                <Upload size={22} />
            </button>

            <button
                aria-label="Notifications"
                className="relative rounded-full p-2 text-zinc-300 hover:bg-zinc-800 hover:text-[#0095B6] transition-colors"
            >
                <Bell size={22} />
                <span className="absolute top-1.5 right-1.5 h-3 w-3 rounded-full bg-[#0095B6]" />
            </button>

            <Link to="/login">
                <button
                aria-label="User Account"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-[#0095B6] hover:ring-2 hover:ring-[#0095B6]/30 transition-all overflow-hidden"
            >
                <User size={22} />
            </button>
            </Link>
            </div>
        </nav>
        </header>
    );
}