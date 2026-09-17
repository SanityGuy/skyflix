/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Compass, SlidersHorizontal, CheckCircle2, Play } from "lucide-react";
import { searchVideos } from "../../services/videoServices";
import { type Video } from "../../types/video";
import SkeletonCard from "../../components/common/SkeletonCard";
import ErrorBoundary from "../../components/common/ErrorBoundary";

function formatDuration(duration?: number | string): string {
  if (duration === undefined || duration === null) return "";
  if (typeof duration === "number") {
    const mins = Math.floor(duration / 60);
    const secs = Math.floor(duration % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }
  return String(duration);
}

function formatViews(views?: number): string {
  if (!views && views !== 0) return "1.2K views";
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M views`;
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K views`;
  return `${views} views`;
}

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query") ?? "";

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Video[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    let isCancelled = false;

    const timer = setTimeout(() => {
      if (isCancelled) return;

      if (!query.trim()) {
        setResults([]);
        setLoading(false);
        return;
      }

      const data = searchVideos(query);
      setResults(data || []);
      setLoading(false);
    }, 300);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [query]);

  const filterTabs = ["All", "Videos", "Channels", "Unwatched", "Recently uploaded"];

  return (
    <ErrorBoundary>
      <div className="min-h-[calc(100vh-3.5rem)] text-zinc-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-4 space-y-5">
          {query.trim() && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 border-b border-zinc-800/60 scrollbar-none">
              <button className="flex items-center gap-2 rounded-lg bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-700 transition-colors shrink-0">
                <SlidersHorizontal className="h-3.5 w-3.5 text-[#0095B6]" />
                <span>Filters</span>
              </button>
              <div className="h-4 w-[1px] bg-zinc-800 shrink-0" />
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all shrink-0 ${
                    activeFilter === tab
                      ? "bg-[#0095B6] text-white shadow-[0_0_12px_rgba(0,149,182,0.4)]"
                      : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}

          {!query.trim() ? (
            <div className="flex flex-col items-center justify-center py-28 text-center space-y-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800/80 text-[#0095B6] shadow-[0_0_24px_rgba(0,149,182,0.15)]">
                <Compass className="h-10 w-10 animate-pulse" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white">Search SkyFlix</h1>
              <p className="max-w-md text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Use the search bar in the top navigation bar to find videos, jet fighters, technical channels, and flight breakdowns.
              </p>
              <Link
                to="/home"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#0095B6] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#00819e] transition-all shadow-[0_0_16px_rgba(0,149,182,0.3)]"
              >
                <span>Back to Home</span>
              </Link>
            </div>
          ) : loading ? (
            <div className="space-y-4 max-w-5xl">
              <SkeletonCard type="horizontal" />
              <SkeletonCard type="horizontal" />
              <SkeletonCard type="horizontal" />
              <SkeletonCard type="horizontal" />
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-4 max-w-5xl">

              <div className="flex flex-col gap-4">
                {results.map((video: Video) => {
                  const videoId = video.id || (video as any)._id || "";
                  const thumbnail = video.thumbnail || (video as any).thumbnailUrl;

                  const rawCreator = (video as any).creator || (video as any).channelName;
                  const creatorName =
                    typeof rawCreator === "object" && rawCreator !== null
                      ? rawCreator.displayName || rawCreator.name || "Sukhoi Media"
                      : typeof rawCreator === "string"
                      ? rawCreator
                      : "Sukhoi Media";

                  const creatorAvatar =
                    (video as any).channelAvatar ||
                    (typeof rawCreator === "object" ? rawCreator?.avatar : undefined);

                  const isVerified =
                    typeof rawCreator === "object" ? rawCreator?.isVerified : (video as any).isVerified;

                  const displayDuration = formatDuration(video.duration);
                  const viewsFormatted = formatViews((video as any).views);
                  const uploadDate = (video as any).uploadedAt || (video as any).createdAt || "2 weeks ago";

                  return (
                    <Link
                      key={videoId}
                      to={`/watch?v=${videoId}`}
                      className="group flex flex-col sm:flex-row gap-4 p-2.5 sm:p-3 rounded-2xl hover:bg-zinc-900/90 border border-transparent hover:border-zinc-800 transition-all duration-200"
                    >
                      <div className="relative aspect-video w-full sm:w-[320px] md:w-[360px] lg:w-[400px] rounded-xl overflow-hidden bg-zinc-900 shrink-0">
                        {thumbnail ? (
                          <img
                            src={thumbnail}
                            alt={video.title}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-zinc-800 text-zinc-600">
                            <Play className="h-10 w-10" />
                          </div>
                        )}
                        {displayDuration && (
                          <span className="absolute bottom-2 right-2 rounded bg-black/85 px-1.5 py-0.5 text-[11px] font-semibold text-white tracking-wide">
                            {displayDuration}
                          </span>
                        )}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="h-10 w-10 rounded-full bg-[#0095B6]/90 text-white flex items-center justify-center shadow-lg">
                            <Play className="h-5 w-5 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0 py-0.5 flex flex-col justify-start">
                        <h3 className="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-[#0095B6] transition-colors line-clamp-2 leading-snug">
                          {video.title}
                        </h3>

                        <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-400">
                          <span>{viewsFormatted}</span>
                          <span>•</span>
                          <span>{uploadDate}</span>
                        </div>

                        <div className="my-2.5 flex items-center gap-2 text-xs text-zinc-300">
                          {creatorAvatar ? (
                            <img
                              src={creatorAvatar}
                              alt={creatorName}
                              className="h-6 w-6 rounded-full object-cover border border-zinc-700"
                            />
                          ) : (
                            <div className="h-6 w-6 rounded-full bg-zinc-800 text-[#0095B6] flex items-center justify-center font-bold text-[10px] border border-zinc-700">
                              {creatorName.charAt(0)}
                            </div>
                          )}
                          <span className="hover:text-white transition-colors font-medium text-zinc-300">
                            {creatorName}
                          </span>
                          {isVerified !== false && (
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#0095B6] fill-[#0095B6]/20" />
                          )}
                        </div>

                        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed hidden sm:block">
                          {video.description || "No description provided for this video broadcast."}
                        </p>

                        <div className="mt-2.5 flex items-center gap-2">
                          <span className="rounded bg-zinc-800/80 border border-zinc-700/60 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
                            4K
                          </span>
                          <span className="rounded bg-zinc-800/80 border border-zinc-700/60 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
                            CC
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 max-w-xl mx-auto">
              <h2 className="text-xl font-bold text-zinc-200">No videos found for "{query}"</h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Try different keywords or check for spelling errors in the navigation bar search.
              </p>
              <Link
                to="/home"
                className="inline-flex items-center gap-2 rounded-full bg-[#0095B6] px-5 py-2 text-xs font-semibold text-white hover:bg-[#00819e] transition-colors shadow-[0_0_12px_rgba(0,149,182,0.3)]"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default SearchPage;