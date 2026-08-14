import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import {
    ExternalLink,
    Mail,
    Calendar,
    Video,
    Users,
    Eye,
    Share2,
    Flag,
    Check,
    Globe,
} from "lucide-react";
import { formatSubscriptions, formatViews } from "../../utils/format";
import type { Channel } from "../../types/channel";

interface ChannelAboutProps {
    creator: Channel;
    totalViews: number;
    videoCount: number;
    onReportClick: () => void;
}

export default function ChannelAbout({
    creator,
    totalViews,
    videoCount,
    onReportClick,
    }: ChannelAboutProps) {
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6 animate-fadeIn">
        <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-zinc-400">
                Description
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                {creator.description || "No channel description available."}
            </p>
            </div>

            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-zinc-400">
                Links & Details
            </h3>
            <div className="flex flex-wrap gap-3">
                {creator.email && (
                <a
                    href={`mailto:${creator.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-zinc-800/80 border border-zinc-700/60 px-4 py-2.5 text-xs font-semibold text-zinc-200 hover:text-[#0095B6] hover:border-[#0095B6]/50 transition-all duration-200"
                >
                    <Mail className="h-4 w-4 text-[#0095B6]" />
                    <span>{creator.email}</span>
                </a>
                )}

                <a
                href="https://github.com/SanityGuy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-800/80 border border-zinc-700/60 px-4 py-2.5 text-xs font-semibold text-zinc-200 hover:text-[#0095B6] hover:border-[#0095B6]/50 transition-all duration-200"
                >
                <FaGithub size={15} />
                <span>GitHub</span>
                <ExternalLink size={12} className="text-zinc-500" />
                </a>
            </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
            <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all active:scale-95"
            >
                {copied ? (
                <Check className="h-3.5 w-3.5 text-[#0095B6]" />
                ) : (
                <Share2 className="h-3.5 w-3.5" />
                )}
                <span>{copied ? "Link Copied" : "Share Channel"}</span>
            </button>

            <button
                onClick={onReportClick}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-400 hover:border-zinc-700 hover:text-red-400 transition-all active:scale-95"
            >
                <Flag className="h-3.5 w-3.5" />
                <span>Report User</span>
            </button>
            </div>
        </div>

        <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 space-y-5 h-fit">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-zinc-400">
            Stats
            </h3>

            <div className="space-y-4 text-xs divide-y divide-zinc-800/60">
            <div className="flex items-center justify-between pt-2">
                <span className="text-zinc-400 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#0095B6]" />
                Joined
                </span>
                <span className="font-medium text-white">
                {creator.joinedDate || "Unknown"}
                </span>
            </div>

            <div className="flex items-center justify-between pt-4">
                <span className="text-zinc-400 flex items-center gap-2">
                <Users className="h-4 w-4 text-[#0095B6]" />
                Subscribers
                </span>
                <span className="font-mono font-semibold text-white">
                {formatSubscriptions(creator.subscribers || 0)}
                </span>
            </div>

            <div className="flex items-center justify-between pt-4">
                <span className="text-zinc-400 flex items-center gap-2">
                <Video className="h-4 w-4 text-[#0095B6]" />
                Videos
                </span>
                <span className="font-mono font-semibold text-white">{videoCount}</span>
            </div>

            <div className="flex items-center justify-between pt-4">
                <span className="text-zinc-400 flex items-center gap-2">
                <Eye className="h-4 w-4 text-[#0095B6]" />
                Total Views
                </span>
                <span className="font-mono font-semibold text-white">
                {formatViews(totalViews)}
                </span>
            </div>

            {creator.country && (
                <div className="flex items-center justify-between pt-4">
                <span className="text-zinc-400 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-[#0095B6]" />
                    Location
                </span>
                <span className="font-medium text-white">{creator.country}</span>
                </div>
            )}
            </div>
        </div>
        </div>
    );
}