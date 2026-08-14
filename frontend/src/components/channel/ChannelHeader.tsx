import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BadgeCheck, ShieldCheck, Bell } from "lucide-react";
import { formatSubscriptions } from "../../utils/format";
import type { Channel } from "../../types/channel";
import "flag-icons/css/flag-icons.min.css";

interface ChannelHeaderProps {
    creator: Channel;
    videoCount: number;
}

export default function ChannelHeader({ creator, videoCount }: ChannelHeaderProps) {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const navigate = useNavigate();
    const { handle } = useParams<{ handle: string }>();

    const getCountryCode = (countryName?: string) => {
        if (!countryName) return null;
        try {
        const cleanName = countryName.trim().toLowerCase();
        const regions = new Intl.DisplayNames(["en"], { type: "region" });

        for (let i = 65; i <= 90; i++) {
            for (let j = 65; j <= 90; j++) {
            const code = String.fromCharCode(i, j);
            if (regions.of(code)?.toLowerCase() === cleanName) {
                return code.toLowerCase();
            }
            }
        }
        } catch (e) {
        console.error(e);
        }
        return null;
    };

    const countryCode = creator.country ? getCountryCode(creator.country) : null;
    const rawDescription = creator.description || "";
    const isLongDescription = rawDescription.length > 150;
    const truncatedDescription = isLongDescription
        ? rawDescription.slice(0, 150).trim()
        : rawDescription;

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-4 border-b border-zinc-800/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative shrink-0 transition-transform duration-200 hover:scale-105">
            <img
                src={
                creator.avatar ||
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                }
                alt={creator.displayName}
                className="h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover border-2 border-[#0095B6] shadow-lg"
            />
            </div>

            <div className="space-y-1.5">
            <div className="flex items-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mr-2">
                {creator.displayName}
                </h1>
                {creator.isAdmin && (
                <ShieldCheck size={24} className="text-[#CD2500]" />
                )}
                {creator.isVerified && (
                <BadgeCheck size={24} className="text-[#0095B6]" />
                )}
            </div>

            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-400 font-medium">
                <span className="text-[#0095B6] font-mono font-semibold">@{creator.id}</span>
                <span>•</span>
                <span>{formatSubscriptions(creator.subscribers || 0)} subscribers</span>
                <span>•</span>
                {videoCount == 1 && (
                <span>{videoCount} video</span>
                )} 
                {videoCount > 1 && (
                <span>{videoCount} videos</span>
                )}
                {creator.country && (
                <>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-zinc-300">
                    {creator.country}
                    {countryCode && (
                        <span className={`fi fi-${countryCode} rounded-sm shadow-sm scale-110`} />
                    )}
                    </span>
                </>
                )}
            </div>

            {rawDescription && (
                <div className="flex flex-col items-start gap-3 pt-1">
                <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
                    {truncatedDescription}
                    {isLongDescription && (
                    <button
                        onClick={() => navigate(`/channel/${handle}/about`)}
                        className="ml-1 font-semibold text-zinc-200 hover:text-[#0095B6] transition-colors focus:outline-none"
                    >
                        ...more
                    </button>
                    )}
                </p>

                <button
                    onClick={() => setIsSubscribed((prev) => !prev)}
                    className={`inline-flex h-9 items-center justify-center gap-2 rounded-full px-5 text-xs font-semibold transition-all duration-200 active:scale-95 ${
                    isSubscribed
                        ? "bg-zinc-800 text-zinc-300 border border-zinc-700/60 hover:bg-zinc-700"
                        : "bg-[#0095B6] text-white hover:bg-[#00819e] hover:shadow-[0_0_15px_rgba(0,149,182,0.35)]"
                    }`}
                >
                    {isSubscribed ? (
                    <>
                        <Bell className="h-3.5 w-3.5 text-[#0095B6]" />
                        <span>Subscribed</span>
                    </>
                    ) : (
                    <span>Subscribe</span>
                    )}
                </button>
                </div>
            )}
            </div>
        </div>
        </div>
    );
}