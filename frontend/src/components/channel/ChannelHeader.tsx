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
  const isLongDescription = rawDescription.length > 130;
  const truncatedDescription = isLongDescription
    ? rawDescription.slice(0, 130).trim()
    : rawDescription;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 py-2 sm:py-4 border-b border-zinc-800/60">
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 w-full">
        <div className="relative shrink-0 transition-transform duration-300 hover:scale-105">
          <img
            src={
              creator.avatar ||
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
            }
            alt={creator.displayName}
            className="h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full object-cover border-2 border-[#0095B6] shadow-[0_0_25px_rgba(0,149,182,0.25)]"
          />
        </div>

        <div className="flex-1 space-y-2 min-w-0">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {creator.displayName}
            </h1>
            {creator.isAdmin && <ShieldCheck size={22} className="text-[#CD2500]" />}
            {creator.isVerified && <BadgeCheck size={22} className="text-[#0095B6]" />}
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-xs sm:text-sm text-zinc-400 font-medium">
            <span className="text-[#0095B6] font-semibold">@{creator.id}</span>
            <span>•</span>
            <span>{formatSubscriptions(creator.subscribers || 0)} subscribers</span>
            <span>•</span>
            <span>{videoCount} {videoCount === 1 ? "video" : "videos"}</span>
            {creator.country && (
              <>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5 text-zinc-300">
                  {creator.country}
                  {countryCode && (
                    <span className={`fi fi-${countryCode} rounded-sm shadow-sm scale-105`} />
                  )}
                </span>
              </>
            )}
          </div>

          {rawDescription && (
            <div className="pt-0.5 max-w-2xl">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed inline">
                {truncatedDescription}
              </p>
              {isLongDescription && (
                <button
                  onClick={() => navigate(`/channel/${handle}/about`)}
                  className="ml-1 font-semibold text-white hover:text-[#0095B6] transition-colors focus:outline-none text-xs sm:text-sm"
                >
                  ...more
                </button>
              )}
            </div>
          )}

          <div className="pt-2 flex justify-center sm:justify-start">
            <button
              onClick={() => setIsSubscribed((prev) => !prev)}
              className={`inline-flex h-9 sm:h-10 items-center justify-center gap-2 rounded-full px-6 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${
                isSubscribed
                  ? "bg-zinc-800 text-zinc-300 border border-zinc-700/60 hover:bg-zinc-700"
                  : "bg-[#0095B6] text-white hover:bg-[#00819e] shadow-[0_0_15px_rgba(0,149,182,0.35)] hover:shadow-[0_0_20px_rgba(0,149,182,0.5)]"
              }`}
            >
              {isSubscribed ? (
                <>
                  <Bell className="h-4 w-4 text-[#0095B6]" />
                  <span>Subscribed</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}