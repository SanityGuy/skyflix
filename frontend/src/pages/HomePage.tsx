import { useOutletContext } from "react-router-dom";
import VideoGrid from "../components/video/VideoGrid";
import videos from "../data/videos";
import type { MainLayoutContext } from "../components/layout/MainLayout";

export default function HomePage() {
    const { searchQuery, selectedCategory } = useOutletContext<MainLayoutContext>();

    const filteredVideos = videos.filter((video) => {
        const matchesCategory =
            selectedCategory === "all" ||
            video.category?.toLowerCase() === selectedCategory.toLowerCase();

        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
            !query ||
            video.title.toLowerCase().includes(query) ||
            video.creator?.displayName?.toLowerCase().includes(query) ||
            video.aircraft?.name?.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    return (
        <div>
            {filteredVideos.length > 0 ? (
                <VideoGrid videos={filteredVideos} />
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center text-zinc-400">
                    <p className="text-lg font-medium text-zinc-300">No videos found</p>
                    <p className="mt-1 text-sm text-zinc-500">
                        Try searching for something else or change the category filter.
                    </p>
                </div>
            )}
        </div>
    );
}