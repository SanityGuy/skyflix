import { NavLink, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";

export default function ChannelTabs() {
    const { handle } = useParams<{ handle: string }>();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const currentQuery = searchParams.get("query") || "";

    const handleSearchChange = (val: string) => {
        if (val.trim()) {
        navigate(`/channel/${handle}/search?query=${encodeURIComponent(val)}`, { replace: true });
        } else {
        navigate(`/channel/${handle}/videos`, { replace: true });
        }
    };

    const handleClearSearch = () => {
        navigate(`/channel/${handle}/videos`);
    };

    return (
        <div className="flex items-center justify-between border-b border-zinc-800 gap-4">
        <div className="flex space-x-6 text-sm font-semibold">
            <NavLink
            to={`/channel/${handle}/videos`}
            className={({ isActive }) =>
                `relative py-3 transition-colors duration-200 ${
                isActive ? "text-[#0095B6]" : "text-zinc-400 hover:text-zinc-200"
                }`
            }
            >
            {({ isActive }) => (
                <>
                Videos
                {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#0095B6] shadow-[0_0_8px_#0095B6]" />
                )}
                </>
            )}
            </NavLink>

            <NavLink
            to={`/channel/${handle}/about`}
            className={({ isActive }) =>
                `relative py-3 transition-colors duration-200 ${
                isActive ? "text-[#0095B6]" : "text-zinc-400 hover:text-zinc-200"
                }`
            }
            >
            {({ isActive }) => (
                <>
                About
                {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#0095B6] shadow-[0_0_8px_#0095B6]" />
                )}
                </>
            )}
            </NavLink>
        </div>

        <div className="relative flex items-center py-2">
            <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-zinc-400 pointer-events-none" />
            <input
                type="text"
                value={currentQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search channel..."
                className="h-8 w-36 sm:w-56 rounded-full bg-zinc-900 border border-zinc-800 pl-9 pr-8 text-xs text-white placeholder-zinc-500 focus:border-[#0095B6] focus:outline-none focus:ring-1 focus:ring-[#0095B6] transition-all duration-200"
            />
            {currentQuery && (
                <button
                onClick={handleClearSearch}
                className="absolute right-2.5 text-zinc-400 hover:text-white"
                >
                <X className="h-3.5 w-3.5" />
                </button>
            )}
            </div>
        </div>
        </div>
    );
}