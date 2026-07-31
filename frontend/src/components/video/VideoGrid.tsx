import VideoCard from "./VideoCard";
import videos from '../video/data/videos';

import {
    FaYoutube
} from "react-icons/fa";

export default function VideoGrid() {
    return (
        <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                    />
                ))}
            </div>
            <hr className="my-3 border-zinc-800 mt-10" />
            <h2 className="text-center text-xs text-zinc-400">
                <span className="text-base font-semibold text-white">
                    You have reached the end of the list!
                </span>
                <p className="mt-2 text-1xl text-zinc-500">
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="font-medium text-zinc-200">
                    
                    <span className="text-zinc-200 hover:text-[#0095B6] transition-colors inline-flex items-center space-x-1">
                        Explore more videos on
                        <FaYoutube size={18} className="ml-1 inline-flex items-center" />
                    </span>
                    </a>
                </p>
            </h2>
        </div>
    );
}