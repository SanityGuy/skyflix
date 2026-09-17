interface VideoPlayerHUDProps {
    isVisible: boolean;
}

export default function VideoPlayerHUD({ isVisible }: VideoPlayerHUDProps) {
    if (!isVisible) return null;

    return (
        <div className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300">
        <div className="absolute top-4 left-4 h-4 w-4 border-l border-t border-[#0095B6]/30" />
        <div className="absolute top-4 right-4 h-4 w-4 border-r border-t border-[#0095B6]/30" />
        <div className="absolute bottom-16 left-4 h-4 w-4 border-l border-b border-[#0095B6]/30" />
        <div className="absolute bottom-16 right-4 h-4 w-4 border-r border-b border-[#0095B6]/30" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 border border-[#0095B6]/15 rounded-full flex items-center justify-center">
            <div className="h-1 w-1 rounded-full bg-[#0095B6]/30" />
        </div>
        </div>
    );
}