import type { Video } from "./types/video";
import { 
    formatViews,
    formatDuration,
    formatDate
} from "../../utils/format";

import {
    BadgeCheck,
    ShieldCheck,
    Plane
} from "lucide-react";

interface VideoCardProps {
    video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
    const renderBadge = () => {
        if (video.creator?.isAdmin) {
            return <ShieldCheck className="h-3.5 w-3.5 text-[#CD2500] flex-shrink-0" />;
        }
        if (video.creator?.isVerified) {
            return <BadgeCheck className="h-3.5 w-3.5 text-[#BED6D8] flex-shrink-0" />;
        }
        return null;
    };

    return (
        <div className="group flex flex-col cursor-pointer rounded-2xl p-2.5 -m-2.5 transform-gpu transition-all duration-150 ease-out hover:scale-[1.03] hover:z-10 hover:bg-slate-800/50 active:scale-[0.98]">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/60 group-hover:border-[#0095B6]/60 transition-colors duration-200">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out"
                    onError={(e) => {
                        e.currentTarget.src = "/fallback/thumbnail.png";
                    }}
                />
                {video.duration && (
                    <span className="absolute bottom-2 right-2 rounded bg-zinc-950/85 px-1.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                        {formatDuration(video.duration)}
                    </span>
                )}
            </div>

            <div className="mt-3 flex space-x-3 px-1">
                <div className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-zinc-800 border border-zinc-700/60 group-hover:border-[#0095B6] transition-colors">
                    {video.creator?.avatar ? (
                        <img
                            src={video.creator.avatar}
                            alt={video.creator.displayName}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs font-bold text-[#0095B6]">
                            {video.creator?.displayName?.[0] || "S"}
                        </div>
                    )}
                </div>

                <div className="flex flex-col pr-1 min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-sm font-semibold text-white group-hover:text-[#0095B6] transition-colors leading-snug">
                        {video.title}
                    </h3>

                    <div className="mt-1.5 flex items-center space-x-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
                        <span className="truncate">{video.creator?.displayName}</span>
                        {renderBadge()}
                    </div>

                    {video.aircraft?.name && (
                        <div className="mt-1 flex items-center space-x-1.5 text-xs text-zinc-400">
                            <Plane className="h-3 w-3 text-[#0095B6] flex-shrink-0" />
                            <span className="truncate font-medium text-zinc-300">
                                {video.aircraft.name}
                            </span>
                        </div>
                    )}

                    {/* Separator Line + Views & Date */}
                    <div className="mt-2 pt-1.5 border-t border-zinc-800/60 flex items-center text-xs text-zinc-400">
                        <span>{formatViews(video.views)} views</span>
                        <span className="mx-1.5 text-zinc-600">•</span>
                        <span>{formatDate(video.uploadedAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}