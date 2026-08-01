import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
    BadgeCheck, 
    ShieldCheck, 
    Plane, 
    ThumbsUp, 
    ThumbsDown, 
    Share2, 
    Bookmark,
    Download, 
    MoreHorizontal, 
    MessageSquare, 
    Send,
    Radio
} from "lucide-react";

import videos from "../components/video/data/videos";
import { formatViews, formatDate } from "../utils/format";

const SAMPLE_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function WatchPage() {
    const { id } = useParams<{ id: string }>();
    const video = videos.find((v) => v.id === id);

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isDescExpanded, setIsDescExpanded] = useState(false);
    const [commentText, setCommentText] = useState("");

    if (!video) {
        return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center p-6 text-zinc-300">
            <Radio className="h-12 w-12 text-[#0095B6] animate-pulse mb-4" />
            <h1 className="text-2xl font-bold text-white">Video Signal Not Found</h1>
            <p className="mt-1 text-sm text-zinc-400">The video you are trying to watch does not exist or has been removed.</p>
            <Link 
            to="/" 
            className="mt-6 rounded-full bg-[#0095B6] px-5 py-2 text-sm font-semibold text-white hover:bg-[#00819e] transition-colors"
            >
            Return to Home
            </Link>
        </div>
        );
    }

    const recommendedVideos = videos.filter((v) => v.id !== id);

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
        <div className="mx-auto max-w-[1700px] p-4 lg:p-6 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black border border-zinc-800 shadow-2xl">
                <video
                controls
                autoPlay
                poster={video.thumbnail}
                className="h-full w-full object-contain"
                >
                <source src={SAMPLE_VIDEO} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>

            <h1 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {video.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 py-1 border-b border-zinc-800/80 pb-4">
                <div className="flex items-center space-x-3">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-zinc-800 border border-zinc-700">
                    {video.creator?.avatar ? (
                    <img
                        src={video.creator.avatar}
                        alt={video.creator.displayName}
                        className="h-full w-full object-cover"
                    />
                    ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-sm font-bold text-[#0095B6]">
                        {video.creator?.displayName?.[0] || "S"}
                    </div>
                    )}
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center space-x-1 font-semibold text-sm text-white">
                    <span>{video.creator?.displayName}</span>
                    {renderBadge()}
                    </div>
                    <span className="text-xs text-zinc-400">128K subscribers</span>
                </div>

                <button
                    onClick={() => setIsSubscribed(!isSubscribed)}
                    className={`ml-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    isSubscribed
                        ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                        : "bg-[#0095B6] text-white hover:bg-[#00819e] shadow-md shadow-[#0095B6]/20"
                    }`}
                >
                    {isSubscribed ? "Subscribed" : "Subscribe"}
                </button>
                </div>

                <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
                <div className="flex items-center rounded-full bg-zinc-800/90 border border-zinc-700/60 divide-x divide-zinc-700">
                    <button
                    onClick={() => {
                        setIsLiked(!isLiked);
                        if (isDisliked) setIsDisliked(false);
                    }}
                    className={`flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium transition-colors rounded-l-full hover:bg-zinc-700 ${
                        isLiked ? "text-[#0095B6]" : "text-zinc-300"
                    }`}
                    >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{formatViews(video.views ? video.views / 10 : 1200)}</span>
                    </button>
                    <button
                    onClick={() => {
                        setIsDisliked(!isDisliked);
                        if (isLiked) setIsLiked(false);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium transition-colors rounded-r-full hover:bg-zinc-700 ${
                        isDisliked ? "text-[#0095B6]" : "text-zinc-300"
                    }`}
                    >
                    <ThumbsDown className="h-4 w-4" />
                    </button>
                </div>

                <button className="flex items-center space-x-1.5 rounded-full bg-zinc-800/90 border border-zinc-700/60 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors active:scale-95 active:bg-[#0095B6]">
                    <Share2 className="h-4 w-4 text-zinc-400" />
                    <span className="hidden sm:inline">Share</span>
                </button>

                <button className="flex items-center space-x-1.5 rounded-full bg-zinc-800/90 border border-zinc-700/60 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors active:scale-95 active:bg-[#0095B6]">
                    <Bookmark className="h-4 w-4 text-zinc-400" />
                    <span className="hidden sm:inline">Save</span>
                </button>

                <button className="flex items-center space-x-1.5 rounded-full bg-zinc-800/90 border border-zinc-700/60 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors active:scale-95 active:bg-[#0095B6]">
                    <Download className="h-4 w-4 text-zinc-400" />
                    <span className="hidden sm:inline">Download</span>
                </button>

                <button className="rounded-full bg-zinc-800/90 border border-zinc-700/60 p-2 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors active:scale-95 active:bg-[#0095B6]">
                    <MoreHorizontal className="h-4 w-4" />
                </button>
                </div>
            </div>

            <div
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="cursor-pointer rounded-2xl bg-zinc-800/50 hover:bg-zinc-800/80 p-4 transition-colors border border-zinc-800/80 text-xs sm:text-sm space-y-2"
            >
                <div className="flex flex-wrap items-center gap-2 font-semibold text-zinc-200">
                <span>{formatViews(video.views)} views</span>
                <span>•</span>
                <span>{formatDate(video.uploadedAt)}</span>

                {video.aircraft?.name && (
                    <div className="ml-2 inline-flex items-center space-x-1 rounded-md bg-zinc-900 px-2 py-0.5 text-xs text-[#0095B6] border border-zinc-700/60">
                    <Plane className="h-3 w-3" />
                    <span>{video.aircraft.name}</span>
                    </div>
                )}
                </div>

                <p className={`text-zinc-300 leading-relaxed ${!isDescExpanded ? "line-clamp-2" : ""}`}>
                {video.description || "No description provided."}
                </p>

                <button className="font-semibold text-zinc-400 hover:text-white text-xs pt-1">
                {isDescExpanded ? "Show less" : "...more"}
                </button>
            </div>

            <div className="pt-4 space-y-4">
                <div className="flex items-center space-x-2 text-sm font-bold">
                <MessageSquare className="h-4 w-4 text-[#0095B6]" />
                <span>0 Comments</span>
                </div>

                <div className="flex gap-3 items-start">
                <div className="h-9 w-9 flex-shrink-0 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-[#0095B6]">
                    S
                </div>
                <div className="flex-1 flex gap-2">
                    <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full border-b border-zinc-700 bg-transparent py-1.5 text-sm text-white placeholder-zinc-500 focus:border-[#0095B6] focus:outline-none transition-colors"
                    />
                    <button
                    type="button"
                    disabled={!commentText.trim()}
                    className="rounded-full bg-[#0095B6] p-2 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#00819e] transition-all"
                    >
                    <Send className="h-4 w-4" />
                    </button>
                </div>
                </div>

                <div className="py-6 text-center text-xs text-zinc-500">
                No comments yet.
                </div>
            </div>
            </div>

            <div className="space-y-3">
            <h2 className="text-sm font-semibold text-zinc-300">Up next</h2>

            <div className="space-y-3">
                {recommendedVideos.map((item) => (
                <Link
                    key={item.id}
                    to={`/watch/${item.id}`}
                    className="group flex gap-2.5 rounded-xl p-1.5 transition-colors hover:bg-zinc-800/60"
                >
                    <div className="relative aspect-video w-40 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800/60 group-hover:border-[#0095B6]/50">
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                    {item.duration && (
                        <span className="absolute bottom-1 right-1 rounded bg-zinc-950/85 px-1 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                        {item.duration}
                        </span>
                    )}
                    </div>

                    <div className="flex flex-col min-w-0 flex-1 justify-start">
                    <h3 className="line-clamp-2 text-xs font-semibold text-white leading-snug group-hover:text-[#0095B6] transition-colors">
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

                    <p className="mt-0.5 text-[11px] text-zinc-500">
                        {formatViews(item.views)} views • {formatDate(item.uploadedAt)}
                    </p>
                    </div>
                </Link>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}