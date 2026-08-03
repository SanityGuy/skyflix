import {
    BadgeCheck,
    ShieldCheck,
    ThumbsUp,
    ThumbsDown,
    Share2,
    Bookmark,
    Download,
    MoreHorizontal,
} from "lucide-react";
import { formatViews } from "../../utils/format";

export interface VideoActionsProps {
    creator?: {
        displayName?: string;
        avatar?: string;
        isVerified?: boolean;
        isAdmin?: boolean;
    };
    subscribers?: number;
    likes: number;
    dislikes: number;
    subscribed: boolean;
    liked: boolean;
    disliked: boolean;
    saved: boolean;
    onSubscribe: () => void;
    onLike: () => void;
    onDislike: () => void;
    onSave: () => void;
    onShare?: () => void;
}

export default function VideoActions({
    creator,
    subscribers = 128000,
    likes,
    subscribed,
    liked,
    disliked,
    saved,
    onSubscribe,
    onLike,
    onDislike,
    onSave,
    onShare = () => {
        if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        }
    },
    }: VideoActionsProps) {
    const renderBadge = () => {
        if (creator?.isAdmin) {
        return <ShieldCheck className="h-4 w-4 text-[#CD2500] shrink-0" />;
        }
        if (creator?.isVerified) {
        return <BadgeCheck className="h-4 w-4 text-[#BED6D8] shrink-0" />;
        }
        return null;
    };

    return (
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-4 pt-2 pb-1">
        <div className="flex items-center space-x-3">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-800 border border-zinc-700/60">
            {creator?.avatar ? (
                <img
                src={creator.avatar}
                alt={creator.displayName}
                className="h-full w-full object-cover"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-sm font-bold text-[#0095B6]">
                {creator?.displayName?.[0] || "S"}
                </div>
            )}
            </div>

            <div className="flex flex-col mr-2">
            <div className="flex items-center space-x-1 font-bold text-sm text-white">
                <span className="truncate max-w-[140px] sm:max-w-[200px]">
                {creator?.displayName || "Unknown Creator"}
                </span>
                {renderBadge()}
            </div>
            <span className="text-xs text-zinc-400">
                {formatViews(subscribers)} subscribers
            </span>
            </div>

            <button
            onClick={onSubscribe}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                subscribed
                ? "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                : "bg-[#0095B6] text-white hover:bg-[#00819e] shadow-md shadow-[#0095B6]/20"
            }`}
            >
            {subscribed ? "Subscribed" : "Subscribe"}
            </button>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center rounded-full bg-zinc-800 hover:bg-zinc-700/80 transition-colors">
            <button
                onClick={onLike}
                className={`flex items-center space-x-2 px-3.5 py-2 text-xs font-semibold rounded-l-full hover:bg-zinc-700/60 ${
                liked ? "text-[#0095B6]" : "text-white"
                }`}
            >
                <ThumbsUp className={`h-4 w-4 ${liked ? "fill-[#0095B6]" : ""}`} />
                <span>{formatViews(likes)}</span>
            </button>
            <div className="h-4 w-[1px] bg-zinc-700" />
            <button
                onClick={onDislike}
                className={`px-3.5 py-2 text-xs font-semibold rounded-r-full hover:bg-zinc-700/60 ${
                disliked ? "text-[#0095B6]" : "text-white"
                }`}
            >
                <ThumbsDown
                className={`h-4 w-4 ${disliked ? "fill-[#0095B6]" : ""}`}
                />
            </button>
            </div>

            <button
            onClick={onShare}
            className="flex items-center space-x-2 rounded-full bg-zinc-800 px-3.5 py-2 text-xs font-semibold text-white hover:bg-zinc-700 transition-colors"
            >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
            </button>

            <button
            onClick={onSave}
            className={`flex items-center space-x-2 rounded-full bg-zinc-800 px-3.5 py-2 text-xs font-semibold transition-colors ${
                saved ? "text-[#0095B6]" : "text-white hover:bg-zinc-700"
            }`}
            >
            <Bookmark className={`h-4 w-4 ${saved ? "fill-[#0095B6]" : ""}`} />
            <span className="hidden sm:inline">{saved ? "Saved" : "Save"}</span>
            </button>

            <button className="flex items-center space-x-2 rounded-full bg-zinc-800 px-3.5 py-2 text-xs font-semibold text-white hover:bg-zinc-700 transition-colors">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download</span>
            </button>

            <button className="rounded-full bg-zinc-800 p-2 text-white hover:bg-zinc-700 transition-colors">
            <MoreHorizontal className="h-4 w-4" />
            </button>
        </div>
        </div>
    );
}