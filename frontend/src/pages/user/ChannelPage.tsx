import { useState } from "react";
import { useParams, useLocation, useSearchParams, Link } from "react-router-dom";
import { Radio } from "lucide-react";

import { getChannelByHandle, searchChannelVideos } from "../../services/channelServices";
import VideoCard from "../../components/video/VideoCard";

import ChannelBanner from "../../components/channel/ChannelBanner";
import ChannelHeader from "../../components/channel/ChannelHeader";
import ChannelTabs from "../../components/channel/ChannelTabs";
import ChannelAbout from "../../components/channel/ChannelAbout";
import ReportModal from "../../components/channel/ReportModal";

export default function ChannelPage() {
    const { handle = "" } = useParams<{ handle: string }>();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [isReportOpen, setIsReportOpen] = useState(false);

    const channelData = getChannelByHandle(handle);

    if (!channelData) {
        return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center text-zinc-300">
            <Radio className="mb-4 h-12 w-12 animate-pulse text-[#0095B6]" />
            <h1 className="text-2xl font-bold text-white">Channel Not Found</h1>
            <p className="mt-1 text-sm text-zinc-400">
            The channel <span className="font-mono text-[#0095B6]">"{handle}"</span> could not be located.
            </p>
            <Link
            to="/"
            className="mt-6 rounded-full bg-[#0095B6] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#00819e]"
            >
            Return to Home
            </Link>
        </div>
        );
    }

    const { creator, videos, totalViews } = channelData;
    const query = searchParams.get("query") || "";
    const filteredVideos = searchChannelVideos(videos, query);

    const isAboutTab = location.pathname.endsWith("/about");
    const isSearchTab = location.pathname.endsWith("/search");

    return (
        <div className="mx-auto max-w-[1750px] p-4 lg:p-6 text-white space-y-6">
        <ChannelBanner
            bannerUrl={creator.bannerUrl}
            channelName={creator.displayName}
        />

        <ChannelHeader
            creator={creator}
            videoCount={videos.length}
        />

        <ChannelTabs />

        {isAboutTab ? (
            <ChannelAbout
            creator={creator}
            totalViews={totalViews}
            videoCount={videos.length}
            onReportClick={() => setIsReportOpen(true)}
            />
        ) : (
            <div className="pt-2 animate-fadeIn">
            {isSearchTab && (
                <p className="mb-4 text-xs text-zinc-400 font-mono">
                Results for: <span className="text-[#0095B6]">"{query}"</span>
                </p>
            )}

            {filteredVideos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredVideos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
                </div>
            ) : (
                <div className="py-16 text-center text-zinc-500 font-mono text-sm">
                {query ? `No videos match "${query}"` : "This channel has no videos available."}
                </div>
            )}
            </div>
        )}

        <ReportModal
            isOpen={isReportOpen}
            onClose={() => setIsReportOpen(false)}
            channelHandle={creator.id}
        />
        </div>
    );
}