import { useOutletContext } from "react-router-dom";
import VideoGrid from "../../components/video/VideoGrid";
import videos from '../../data/videos';
import type { MainLayoutContext } from "../../components/layout/MainLayout";

export default function HomePage() {
    const { selectedCategory } = useOutletContext<MainLayoutContext>();

    const filteredVideos = videos.filter((video) => {
        const matchesCategory =
            selectedCategory === "all" ||
            video.category?.toLowerCase() === selectedCategory.toLowerCase();

        return matchesCategory;
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