import {
    TvMinimalPlay
} from "lucide-react";

import videos from "../../data/videos";
import VideoGrid from "../../components/video/VideoGrid";

export default function LiveRadarPage() {
    return (
        <div className="min-h-screen w-full flex flex-col p-6 md:p-10 relative overflow-x-hidden">
            
            <div className="flex flex-col gap-2 mb-10 max-w-4xl">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center">
                    <TvMinimalPlay size={30} className="mr-3 shrink-0 text-[#0095B6]" />
                    Live Radar 
                    <span className="ml-3 text-sm md:text-base text-red-500 font-mono uppercase bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                        Coming soon
                    </span>
                </h1>
                <p className="text-sm font-medium text-zinc-400">
                    Find your favorite streamers and aircraft in real-time!
                </p>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <h2 className="text-xl font-bold text-white tracking-tight">
                    Recommended Live Streams
                </h2>
                <div className="w-full">
                    <VideoGrid videos={videos} showMore={false} maxVids={3} live={true} />
                </div>
            </div>
        </div>
    );
}
