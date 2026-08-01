import { Link } from "react-router-dom";
import { 
    ListCollapse,
    Search,
    Mic, 
    Plus, 
    Bell, 
    User 
} from "lucide-react";
import logoIcon from "../assets/logo/sukhoi/favicon.ico";
import CategoryBar from "../components/category/CategoryBar";

interface NavbarProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    selectedCategory: string;
    onCategorySelect: (category: string) => void;
    logoUrl?: string;
}

export default function Navbar({ 
    searchQuery, 
    onSearchChange, 
    selectedCategory,
    onCategorySelect,
    logoUrl = logoIcon
}: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#0f0f0f]">
            <nav className="flex h-16 items-center justify-between border-b border-zinc-800/80 px-4 text-white bg-[#0f0f0f]">
                <div className="flex items-center space-x-3">
                    <button
                        className="rounded-full p-2 text-zinc-300 hover:bg-zinc-800 transition-colors"
                        aria-label="Toggle Sidebar"
                    >
                        <ListCollapse size={22} />
                    </button>

                    <Link to="/" className="group flex items-center space-x-2">
                        <img src={logoUrl} alt="SkyFlix Logo" className="h-7 w-auto max-w-[120px] object-contain" />
                        <span className="text-xl font-bold tracking-tight text-white">
                            Sky<span className="text-[#0095B6]">Flix</span>
                        </span>
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
                                className="w-full bg-transparent px-5 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                            />
                            <button
                                type="submit"
                                aria-label="Submit Search"
                                className="flex items-center justify-center border-l border-zinc-700/80 bg-zinc-800/80 px-5 py-2 text-zinc-300 hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
                            >
                                <Search size={20} />
                            </button>
                        </div>
                    </form>

                    <button
                        type="button"
                        aria-label="Search with voice"
                        className="ml-3 hidden sm:flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
                    >
                        <Mic size={20} />
                    </button>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                    <button
                        aria-label="Create content"
                        className="flex items-center space-x-2 rounded-full bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
                    >
                        <Plus size={18} />
                        <span className="hidden md:inline">Create</span>
                    </button>

                    <button
                        aria-label="Notifications"
                        className="relative rounded-full p-2 text-zinc-300 hover:bg-zinc-800 hover:text-[#0095B6] transition-colors"
                    >
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#0095B6]" />
                    </button>

                    <button
                        aria-label="User Account"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-[#0095B6] hover:ring-2 hover:ring-[#0095B6]/30 transition-all overflow-hidden"
                    >
                        <User size={20} />
                    </button>
                </div>
            </nav>

            {/* Category Sub-Bar */}
            <div className="border-b border-zinc-800/80 bg-[#0f0f0f]">
                <CategoryBar
                    selected={selectedCategory}
                    onSelect={onCategorySelect}
                />
            </div>
        </header>
    );
}