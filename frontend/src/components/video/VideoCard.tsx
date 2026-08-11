import { Link } from "react-router-dom";
import type { Video } from "./types/video";
import videos from "./data/videos";

import VideoThumbnail from "./VideoThumbnail";
import { CreatorAvatar, CreatorBadge } from "./VideoCreator";
import AircraftLabel from "./AircraftLabel";
import VideoStats from "./VideoStats";

interface VideoCardProps {
    video?: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
    const currentVideo = video || videos[0];

    if (!currentVideo) return null;

    return (
        <Link to={`/watch/${currentVideo.id}`}>
        <div className="group flex flex-col cursor-pointer rounded-2xl p-2.5 -m-2.5 transform-gpu transition-all duration-150 ease-out hover:scale-[1.03] hover:z-10 hover:bg-slate-800/50 active:scale-[0.98]">
            <VideoThumbnail
            thumbnail={currentVideo.thumbnail}
            title={currentVideo.title}
            duration={currentVideo.duration}
            />

            <div className="mt-3 flex space-x-3 px-1">
            <CreatorAvatar creator={currentVideo.creator} />

            <div className="flex flex-col pr-1 min-w-0 flex-1">
                <Link to={`/channel/@${currentVideo.creator?.id}`}>
                    <h3 className="line-clamp-2 text-sm font-semibold text-white group-hover:text-[#0095B6] transition-colors leading-snug">
                    {currentVideo.title}
                    </h3>

                    <div className="mt-1.5 flex items-center space-x-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
                    <span className="truncate">{currentVideo.creator?.displayName}</span>
                    <CreatorBadge creator={currentVideo.creator} />
                    </div>
                </Link>

                <AircraftLabel name={currentVideo.aircraft?.name} />

                <VideoStats
                views={currentVideo.views}
                uploadedAt={currentVideo.uploadedAt}
                />
            </div>
            </div>
        </div>
        </Link>
    );
}