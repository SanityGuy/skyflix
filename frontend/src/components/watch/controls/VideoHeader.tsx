interface VideoHeaderProps {
    title: string;
    showControls: boolean;
    isFullscreen: boolean;
}

export default function VideoHeader({
    title,
    showControls,
    isFullscreen,
}: VideoHeaderProps) {
    if (!isFullscreen) return null;

    return (
        <div
        className={`absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent p-4 transition-all duration-300 ${
            showControls
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        >
        <h2 className="text-base sm:text-lg font-medium text-white truncate max-w-[60%] sm:max-w-[80%] drop-shadow-md">
            {title}
        </h2>
        </div>
    );
}