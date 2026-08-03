import DurationBadge from "./DurationBadge";

interface VideoThumbnailProps {
    thumbnail: string;
    title: string;
    duration?: number;
    }

export default function VideoThumbnail({
    thumbnail,
    title,
    duration,
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
        {duration && <DurationBadge duration={duration} />}
        </div>
    );
}