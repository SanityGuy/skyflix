interface ChannelBannerProps {
    bannerUrl?: string;
    channelName?: string;
}

export default function ChannelBanner({ bannerUrl, channelName }: ChannelBannerProps) {
    if (!bannerUrl) return null;

    return (
        <div className="relative aspect-[16/9] md:aspect-[6/1] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl transition-all duration-300">
            <img
                src={bannerUrl}
                alt={channelName || "Channel Banner"}
                className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-2xl" />
        </div>
    );
}
