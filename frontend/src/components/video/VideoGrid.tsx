import VideoCard from "./VideoCard";
import type { Video } from "../../types/video";

import {
    FaYoutube
} from "react-icons/fa";

interface VideoGridProps {
    videos: Video[];
    showMore: boolean;
    maxVids?: number;
    live?: boolean;
}

export default function VideoGrid({ videos, showMore, maxVids = 0, live = false }: VideoGridProps) {
    const videosToDisplay = maxVids === 0 ? videos : videos.slice(0, maxVids);

    return (
        <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videosToDisplay.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                        live={live}
                    />
                ))}
            </div>
            <hr className="my-3 border-zinc-800 mt-10" />
            {showMore && (
                <h2 className="text-center text-xs text-zinc-400">
                    <span className="text-base font-semibold text-white">
                        You have reached the end of the list!
                    </span>
                    <p className="mt-2 text-sm text-zinc-500">
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="font-medium text-zinc-200">
                            <span className="text-zinc-200 hover:text-[#0095B6] transition-colors inline-flex items-center gap-1.5">
                                Explore more videos on 
                                <FaYoutube size={18} className="group-hover:text-red-500 transition-colors" />
                            </span>
                        </a>
                    </p>
                </h2>
            )}
        </div>
    );
}