import { Link, useNavigate } from "react-router-dom";
import type { Video } from "../../types/video";
import { getVideos } from "../../services/videoServices";

import VideoThumbnail from "./VideoThumbnail";
import { CreatorAvatar, CreatorBadge } from "./VideoCreator";
import AircraftLabel from "./AircraftLabel";
import VideoStats from "./VideoStats";

interface VideoCardProps {
    video?: Video;
    videoId?: string;
}

export default function VideoCard({ video, videoId }: VideoCardProps) {
    const navigate = useNavigate();
    const allVideos = getVideos();
    const currentVideo = video || (videoId ? allVideos.find((v) => v.id === videoId) : allVideos[0]);

    if (!currentVideo) return null;

    const handleChannelClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (currentVideo.creator?.id) {
        navigate(`/channel/@${currentVideo.creator.id}/videos`);
        }
    };

    return (
        <Link to={`/watch?v=${currentVideo.id}`} className="block group">
        <div className="flex flex-col rounded-2xl p-2.5 -m-2.5 transform-gpu transition-all duration-200 ease-out hover:scale-[1.02] hover:z-10 hover:bg-zinc-800/60 hover:border-zinc-700/50 border border-transparent active:scale-[0.98]">
            <VideoThumbnail
            thumbnail={currentVideo.thumbnail}
            title={currentVideo.title}
            duration={currentVideo.duration}
            />

            <div className="mt-3 flex space-x-3 px-1">
            <div onClick={handleChannelClick}>
                <CreatorAvatar creator={currentVideo.creator} />
            </div>

            <div className="flex flex-col pr-1 min-w-0 flex-1">
                <h3 className="line-clamp-2 text-sm font-semibold text-white group-hover:text-[#0095B6] transition-colors leading-snug">
                {currentVideo.title}
                </h3>

                <button
                onClick={handleChannelClick}
                className="mt-1.5 flex items-center space-x-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors w-fit text-left"
                >
                <span className="truncate">{currentVideo.creator?.displayName}</span>
                <CreatorBadge creator={currentVideo.creator} />
                </button>

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