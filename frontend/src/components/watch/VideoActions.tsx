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
import { Link } from "react-router-dom";

export interface SubtitleTrack {
    id: string;
    label: string;
    language: string;
    src?: string;
}

export interface VideoQuality {
    label: string; 
    src: string;
}

export interface Creator {
    id?: string;
    displayName?: string;
    subscribers?: number;
    avatar?: string;
    country?: string;
    description?: string;
    isVerified?: boolean;
    isAdmin?: boolean;
}

export interface Video {
    id: string;
    title: string;
    description?: string;
    videoUrl: string;
    thumbnail: string;
    views: number;
    duration: number;
    likes: number;
    dislikes: number;
    uploadedAt: string | Date;
    qualities?: VideoQuality[];
    subtitles?: SubtitleTrack[];
    category?: string;
    tags?: string[];
    aircraft?: {
        name?: string;
        manufacturer?: string;
        country?: string;
        type?: string;
    };
    creator?: Creator;
}

export interface VideoActionsProps {
    creator?: Creator;
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
    onDownload?: () => void;
}

export default function VideoActions({
    creator,
    subscribers,
    likes,
    dislikes = 0,
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
    onDownload,
}: VideoActionsProps) {
    const subscriberCount = creator?.subscribers ?? subscribers ?? 0;
    const channelHandle = creator?.id || creator?.displayName?.toLowerCase().replace(/\s+/g, "_") || "unknown";

    const renderBadge = () => {
        if (creator?.isAdmin) {
            return <span title="Admin"><ShieldCheck className="h-4 w-4 text-[#CD2500] shrink-0" /></span>;
        }
        if (creator?.isVerified) {
            return <span title="Verified Creator"><BadgeCheck className="h-4 w-4 text-[#BED6D8] shrink-0" /></span>;
        }
        return null;
    };

    return (
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-4 pt-2 pb-1">
            <div className="flex items-center space-x-3.5">
                <Link to={`/channel/@${channelHandle}/videos`}>
                    {creator?.avatar ? (
                        <div className="group relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-zinc-800 border border-zinc-700/60 transition-all duration-200 hover:border-[#0095B6]/60 hover:ring-2 hover:ring-[#0095B6]/20">
                        <img
                            src={creator.avatar}
                            alt={creator.displayName || "Creator avatar"}
                            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                        </div>
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-base font-bold text-[#0095B6]">
                            {creator?.displayName?.[0]?.toUpperCase() || "S"}
                        </div>
                    )}
                </Link>

                <div className="flex flex-col mr-2">
                    <Link 
                        to={`/channel/@${channelHandle}/videos`}
                        className="flex items-center space-x-1.5 font-bold text-sm text-white hover:text-[#0095B6] transition-colors"
                    >
                        <span className="truncate max-w-[140px] sm:max-w-[200px]">
                            {creator?.displayName || "Unknown Creator"}
                        </span>
                        {renderBadge()}
                    </Link>
                    <span className="text-xs text-zinc-400 font-medium">
                        {formatViews(subscriberCount)} subscribers
                    </span>
                </div>

                <button
                    onClick={onSubscribe}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 active:scale-95 ${
                        subscribed
                            ? "bg-zinc-800 text-zinc-300 border border-zinc-700/60 hover:bg-zinc-700/80 hover:text-white"
                            : "bg-[#0095B6] text-white hover:bg-[#00819e] hover:shadow-[0_0_15px_rgba(0,149,182,0.35)]"
                    }`}
                >
                    {subscribed ? "Subscribed" : "Subscribe"}
                </button>
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-0.5">
                <div className="flex items-center rounded-full bg-zinc-800/80 border border-zinc-700/50 hover:border-zinc-600 transition-colors">
                    <button
                        onClick={onLike}
                        className={`flex items-center space-x-2 px-3.5 py-2 text-xs font-semibold rounded-l-full transition-all duration-150 hover:bg-zinc-700/60 active:scale-95 ${
                            liked 
                                ? "text-[#0095B6] bg-[#0095B6]/10" 
                                : "text-zinc-200 hover:text-white"
                        }`}
                        title="I like this"
                    >
                        <ThumbsUp className={`h-4 w-4 ${liked ? "fill-[#0095B6]" : ""}`} />
                        <span>{formatViews(likes)}</span>
                    </button>

                    <div className="h-4 w-[1px] bg-zinc-700/70" />

                    <button
                        onClick={onDislike}
                        className={`flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold rounded-r-full transition-all duration-150 hover:bg-zinc-700/60 active:scale-95 ${
                            disliked 
                                ? "text-[#0095B6] bg-[#0095B6]/10" 
                                : "text-zinc-200 hover:text-white"
                        }`}
                        title="I dislike this"
                    >
                        <ThumbsDown className={`h-4 w-4 ${disliked ? "fill-[#0095B6]" : ""}`} />
                        {dislikes > 0 && <span>{formatViews(dislikes)}</span>}
                    </button>
                </div>

                <button
                    onClick={onShare}
                    className="flex items-center space-x-2 rounded-full bg-zinc-800/80 border border-zinc-700/50 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:text-white hover:bg-zinc-700/80 hover:border-zinc-600 transition-all duration-150 active:scale-95"
                >
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Share</span>
                </button>

                <button
                    onClick={onSave}
                    className={`flex items-center space-x-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-150 active:scale-95 ${
                        saved
                            ? "bg-[#0095B6]/10 border-[#0095B6]/50 text-[#0095B6]"
                            : "bg-zinc-800/80 border-zinc-700/50 text-zinc-200 hover:text-white hover:bg-zinc-700/80 hover:border-zinc-600"
                    }`}
                >
                    <Bookmark className={`h-4 w-4 ${saved ? "fill-[#0095B6]" : ""}`} />
                    <span className="hidden sm:inline">{saved ? "Saved" : "Save"}</span>
                </button>

                <button 
                    onClick={onDownload}
                    className="flex items-center space-x-2 rounded-full bg-zinc-800/80 border border-zinc-700/50 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:text-white hover:bg-zinc-700/80 hover:border-zinc-600 transition-all duration-150 active:scale-95"
                >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                </button>

                <button className="rounded-full bg-zinc-800/80 border border-zinc-700/50 p-2 text-zinc-200 hover:text-white hover:bg-zinc-700/80 hover:border-zinc-600 transition-all duration-150 active:scale-95">
                    <MoreHorizontal className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}