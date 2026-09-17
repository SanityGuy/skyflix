interface ChannelBannerProps {
  bannerUrl?: string;
  channelName?: string;
}

export default function ChannelBanner({ bannerUrl, channelName }: ChannelBannerProps) {
  if (!bannerUrl) return null;

  return (
    <div className="relative w-full aspect-[3.2/1] sm:aspect-[4.5/1] md:aspect-[6/1] overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800/80 bg-zinc-950 shadow-2xl transition-all">
      <img
        src={bannerUrl}
        alt={channelName || "Channel Banner"}
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-xl sm:rounded-2xl" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
    </div>
  );
}