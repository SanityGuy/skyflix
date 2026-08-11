import { useState } from "react";
import { Plane, ChevronDown, ChevronUp } from "lucide-react";
import { formatViews, formatDate } from "../../utils/format";

interface AircraftInfo {
    name?: string;
    manufacturer?: string;
    country?: string;
    type?: string;
}

interface VideoDescriptionProps {
    views: number;
    uploadedAt: string | Date;
    description?: string;
    tags?: string[];
    aircraft?: AircraftInfo;
    aircraftName?: string; 
}

export default function VideoDescription({
    views,
    uploadedAt,
    description,
    tags = [],
    aircraft,
    aircraftName,
}: VideoDescriptionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const activeAircraftName = aircraft?.name || aircraftName;

    return (
        <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className={`group relative rounded-2xl bg-zinc-800/60 hover:bg-zinc-800/90 p-4 transition-all duration-200 border border-zinc-700/40 text-sm cursor-pointer select-none ${
            isExpanded ? "bg-zinc-800/90" : ""
        }`}
        >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-bold text-white text-sm">
            <span>{formatViews(views)} views</span>
            <span className="text-zinc-500">•</span>
            <span>{formatDate(uploadedAt)}</span>

            {activeAircraftName && (
            <div className="inline-flex items-center space-x-1.5 rounded-md bg-[#0095B6]/10 px-2.5 py-0.5 text-xs text-[#0095B6] border border-[#0095B6]/30 font-medium">
                <Plane className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="truncate">{activeAircraftName}</span>
            </div>
            )}
        </div>

        {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs font-medium text-[#0095B6]">
            {tags.map((tag) => {
                const cleanTag = tag.startsWith("#") ? tag : `#${tag}`;
                return (
                <span
                    key={tag}
                    className="hover:underline hover:text-[#2bb3d4] transition-colors"
                    onClick={(e) => {
                    e.stopPropagation();
                    }}
                >
                    {cleanTag}
                </span>
                );
            })}
            </div>
        )}

        <div className="mt-2.5">
            <p
            className={`text-zinc-200 leading-relaxed font-normal ${
                !isExpanded ? "line-clamp-2" : "whitespace-pre-wrap"
            }`}
            >
            {description || "No description provided."}
            </p>
        </div>

        {isExpanded && aircraft && (aircraft.manufacturer || aircraft.type || aircraft.country) && (
            <div className="mt-4 rounded-xl bg-zinc-900/80 p-3 border border-zinc-700/50 text-xs space-y-1.5">
            <span className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">
                Aircraft Technical Details
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-zinc-300">
                {aircraft.manufacturer && (
                <div>
                    <span className="text-zinc-500 block">Manufacturer</span>
                    <span className="font-medium">{aircraft.manufacturer}</span>
                </div>
                )}
                {aircraft.type && (
                <div>
                    <span className="text-zinc-500 block">Class / Type</span>
                    <span className="font-medium">{aircraft.type}</span>
                </div>
                )}
                {aircraft.country && (
                <div>
                    <span className="text-zinc-500 block">Origin</span>
                    <span className="font-medium">{aircraft.country}</span>
                </div>
                )}
            </div>
            </div>
        )}

        <div className="mt-3 flex items-center space-x-1 font-semibold text-xs text-zinc-300 group-hover:text-white transition-colors">
            <span>{isExpanded ? "Show less" : "...more"}</span>
            {isExpanded ? (
            <ChevronUp className="h-3.5 w-3.5 text-zinc-400" />
            ) : (
            <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
            )}
        </div>
        </div>
    );
}