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
    <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between border-b border-zinc-800/80 gap-3 sm:gap-4 overflow-x-auto no-scrollbar">
      <div className="flex items-center space-x-6 text-xs sm:text-sm font-semibold shrink-0">
        <NavLink
          to={`/channel/${handle}/videos`}
          className={({ isActive }) =>
            `relative py-3 transition-colors duration-200 whitespace-nowrap ${
              isActive ? "text-[#0095B6]" : "text-zinc-400 hover:text-zinc-200"
            }`
          }
        >
          {({ isActive }) => (
            <>
              Videos
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#0095B6] shadow-[0_0_10px_#0095B6]" />
              )}
            </>
          )}
        </NavLink>

        <NavLink
          to={`/channel/${handle}/about`}
          className={({ isActive }) =>
            `relative py-3 transition-colors duration-200 whitespace-nowrap ${
              isActive ? "text-[#0095B6]" : "text-zinc-400 hover:text-zinc-200"
            }`
          }
        >
          {({ isActive }) => (
            <>
              About
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#0095B6] shadow-[0_0_10px_#0095B6]" />
              )}
            </>
          )}
        </NavLink>
      </div>

      <div className="relative flex items-center py-1 sm:py-2">
        <div className="relative flex items-center w-full sm:w-auto">
          <Search className="absolute left-3 h-3.5 w-3.5 text-zinc-400 pointer-events-none" />
          <input
            type="text"
            value={currentQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search channel..."
            className="h-8 w-full sm:w-48 lg:w-60 rounded-full bg-zinc-900/80 border border-zinc-800/80 pl-9 pr-8 text-xs text-white placeholder-zinc-500 focus:border-[#0095B6] focus:outline-none focus:ring-1 focus:ring-[#0095B6] transition-all duration-200"
          />
          {currentQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-2.5 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}