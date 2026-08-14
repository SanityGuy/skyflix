import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { searchVideos } from "../services/videoServices";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("search_query") ?? "";
    
    const searchResults = searchVideos(query);

    if (!query) {
        return (
            <div className="flex flex-col items-center justify-center py-50 text-center text-zinc-400">
                <h1 className="text-xl font-bold text-zinc-300">Search Page </h1>
                <h3 className="mt-1 text-sm text-zinc-400">
                    Hello there, I see that you haven't searched for anything yet. <br />
                    You can search for videos, aircraft, creators, etc. <br />
                    Just type in the search bar and start exploring.
                </h3>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-50 text-center text-zinc-400">
            <h1 className="text-xl font-bold text-zinc-300">Search Page </h1>
            <h3 className="mt-1 text-m text-zinc-400">
                Hi there, I see that you searched for <br />
                <span className="text-xl font-medium text-zinc-300">{searchResults.length} results</span><br />
            </h3>
            <Link to="/home">
                <button
                    type="button"
                    className="mt-5 flex h-9 w-50 items-center justify-center rounded-full bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
                >
                    <Link to="/home">
                        <span className="ml-1.5 hidden md:inline">Go to Home</span>
                    </Link>
                </button>
            </Link>
        </div>
    )
}

export default SearchPage;