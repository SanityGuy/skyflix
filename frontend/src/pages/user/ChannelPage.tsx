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
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center text-zinc-300">
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0095B6]/10 border border-[#0095B6]/30">
          <Radio className="h-10 w-10 animate-pulse text-[#0095B6]" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Channel Not Found</h1>
        <p className="mt-2 text-sm text-zinc-400 max-w-md">
          The channel <span className="font-mono text-[#0095B6]">"{handle}"</span> doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0095B6] px-6 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-[#00819e] hover:shadow-[0_0_20px_rgba(0,149,182,0.4)] active:scale-95"
        >
          Return Home
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
    <div className="mx-auto max-w-[1700px] px-3 sm:px-6 lg:px-8 py-4 text-white space-y-4 sm:space-y-6">
      <ChannelBanner bannerUrl={creator.bannerUrl} channelName={creator.displayName} />

      <ChannelHeader creator={creator} videoCount={videos.length} />

      <ChannelTabs />

      {isAboutTab ? (
        <ChannelAbout
          creator={creator}
          totalViews={totalViews}
          videoCount={videos.length}
          onReportClick={() => setIsReportOpen(true)}
        />
      ) : (
        <div className="pt-2">
          {isSearchTab && (
            <p className="mb-4 text-xs font-mono text-zinc-400">
              Results for: <span className="text-[#0095B6]">"{query}"</span>
            </p>
          )}

          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-8">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center font-mono text-xs sm:text-sm text-zinc-500 rounded-2xl bg-zinc-900/30 border border-zinc-800/60">
              {query ? `No videos match "${query}"` : "This channel has no uploaded videos."}
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