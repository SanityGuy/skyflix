import { Link } from "react-router-dom";
import { Plane } from "lucide-react";
import type { Video } from "../video/types/video";
import { formatViews, formatDate, formatDuration } from "../../utils/format";

interface RecommendedVideosProps {
    videos: Video[];
    currentVideoId?: string;
}

export default function RecommendedVideos({
    videos,
    currentVideoId,
}: RecommendedVideosProps) {
    const filteredVideos = videos.filter((v) => v.id !== currentVideoId);

    return (
        <div className="space-y-3">
        {filteredVideos.map((item) => (
            <Link
            key={item.id}
            to={`/watch/${item.id}`}
            className="group flex gap-2 rounded-xl p-1.5 transition-colors hover:bg-zinc-800/50"
            >
            <div className="relative aspect-video w-40 shrink-0 overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/60 group-hover:border-[#0095B6]/50">
                <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                {item.duration && (
                <span className="absolute bottom-1 right-1 rounded bg-zinc-950/85 px-1 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                    {formatDuration(item.duration)}
                </span>
                )}
            </div>

            <div className="flex flex-col min-w-0 flex-1 justify-start">
                <h3 className="line-clamp-2 text-xs font-bold text-white leading-snug group-hover:text-[#0095B6] transition-colors">
                {item.title}
                </h3>

                <p className="mt-1 text-[11px] text-zinc-400 truncate">
                {item.creator?.displayName}
                </p>

                {item.aircraft?.name && (
                <div className="mt-0.5 flex items-center space-x-1 text-[10px] text-zinc-400">
                    <Plane className="h-2.5 w-2.5 text-[#0095B6]" />
                    <span className="truncate">{item.aircraft.name}</span>
                </div>
                )}

                <p className="mt-0.5 text-[11px] text-zinc-400">
                {formatViews(item.views)} views • {formatDate(item.uploadedAt)}
                </p>
            </div>
            </Link>
        ))}
        </div>
    );
}