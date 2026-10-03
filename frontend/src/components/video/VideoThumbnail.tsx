import DurationBadge from "./DurationBadge";
import LiveBadge from "./LiveBadge";

interface VideoThumbnailProps {
    thumbnail: string;
    title: string;
    duration?: number;
    showLiveBadge?: boolean;
    }

export default function VideoThumbnail({
    thumbnail,
    title,
    duration,
    showLiveBadge = false,
}: VideoThumbnailProps) {
    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/60 group-hover:border-[#0095B6]/60 transition-colors duration-200">
        <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out"
            onError={(e) => {
            e.currentTarget.src = "/fallback/thumbnail.png";
            }}
        />
        {showLiveBadge ? (
            <div className="absolute bottom-2 right-2">
                <LiveBadge />
            </div>
        ) : (
            duration !== undefined && <DurationBadge duration={duration} />
        )}
        </div>
    );
}