import { useState } from "react";
import { Plane } from "lucide-react";
import { formatViews, formatDate } from "../../utils/format";

interface VideoDescriptionProps {
    views: number;
    uploadedAt: string | Date;
    description?: string;
    aircraftName?: string;
}

export default function VideoDescription({
    views,
    uploadedAt,
    description,
    aircraftName,
}: VideoDescriptionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer rounded-2xl bg-zinc-800/70 hover:bg-zinc-800 p-3.5 transition-colors border border-zinc-700/30 text-sm space-y-2"
        >
        <div className="flex flex-wrap items-center gap-2 font-bold text-white">
            <span>{formatViews(views)} views</span>
            <span>{formatDate(uploadedAt)}</span>

            {aircraftName && (
            <div className="inline-flex items-center space-x-1 rounded-md bg-zinc-900/90 px-2 py-0.5 text-xs text-[#0095B6] border border-zinc-700/80">
                <Plane className="h-3 w-3" />
                <span>{aircraftName}</span>
            </div>
            )}
        </div>

        <p
            className={`text-zinc-200 leading-relaxed ${
            !isExpanded ? "line-clamp-2" : ""
            }`}
        >
            {description || "No description provided."}
        </p>

        <button className="font-bold text-white text-xs pt-1">
            {isExpanded ? "Show less" : "...more"}
        </button>
        </div>
    );
}