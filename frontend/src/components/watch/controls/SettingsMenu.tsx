import { useState } from "react";
import { Check, ChevronRight, Gauge, Hd, Captions } from "lucide-react";

interface SettingsMenuProps {
    playbackRate: number;
    quality: string;
    subtitle: string;
    qualities?: string[];
    subtitles?: string[];
    onRateChange: (rate: number) => void;
    onQualityChange: (q: string) => void;
    onSubtitleChange: (s: string) => void;
    onClose: () => void;
}

type MenuPage = "main" | "speed" | "quality" | "subtitles";

export default function SettingsMenu({
    playbackRate,
    quality,
    subtitle,
    qualities = ["1080p", "720p", "480p", "360p", "Auto"],
    subtitles = ["Off", "English", "Russian"],
    onRateChange,
    onQualityChange,
    onSubtitleChange,
}: SettingsMenuProps) {
    const [page, setPage] = useState<MenuPage>("main");
    const speedOptions = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

    return (
        <div className="absolute bottom-14 right-4 z-30 w-56 rounded-xl bg-zinc-950/95 border border-zinc-800/80 p-2 text-xs font-medium text-zinc-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
        {page === "main" && (
            <div className="space-y-1">
            <button
                onClick={() => setPage("speed")}
                className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 hover:bg-zinc-800/80 transition-colors"
            >
                <div className="flex items-center space-x-2">
                <Gauge className="h-4 w-4 text-[#0095B6]" />
                <span>Playback Speed</span>
                </div>
                <div className="flex items-center space-x-1 text-zinc-400">
                <span>{playbackRate === 1 ? "Normal" : `${playbackRate}x`}</span>
                <ChevronRight className="h-3.5 w-3.5" />
                </div>
            </button>

            <button
                onClick={() => setPage("quality")}
                className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 hover:bg-zinc-800/80 transition-colors"
            >
                <div className="flex items-center space-x-2">
                <Hd className="h-4 w-4 text-[#0095B6]" />
                <span>Quality</span>
                </div>
                <div className="flex items-center space-x-1 text-zinc-400">
                <span>{quality}</span>
                <ChevronRight className="h-3.5 w-3.5" />
                </div>
            </button>

            <button
                onClick={() => setPage("subtitles")}
                className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 hover:bg-zinc-800/80 transition-colors"
            >
                <div className="flex items-center space-x-2">
                <Captions className="h-4 w-4 text-[#0095B6]" />
                <span>Subtitles</span>
                </div>
                <div className="flex items-center space-x-1 text-zinc-400">
                <span className="truncate max-w-[70px]">{subtitle}</span>
                <ChevronRight className="h-3.5 w-3.5" />
                </div>
            </button>
            </div>
        )}

        {page === "speed" && (
            <div className="space-y-0.5">
            <button
                onClick={() => setPage("main")}
                className="mb-1 w-full border-b border-zinc-800 pb-1.5 font-bold text-[#0095B6] text-left px-2 flex items-center space-x-1"
            >
                <span>← Speed</span>
            </button>
            {speedOptions.map((rate) => (
                <button
                key={rate}
                onClick={() => {
                    onRateChange(rate);
                    setPage("main");
                }}
                className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 hover:bg-zinc-800 transition-colors"
                >
                <span>{rate === 1 ? "Normal" : `${rate}x`}</span>
                {playbackRate === rate && <Check className="h-3.5 w-3.5 text-[#0095B6]" />}
                </button>
            ))}
            </div>
        )}

        {page === "quality" && (
            <div className="space-y-0.5">
            <button
                onClick={() => setPage("main")}
                className="mb-1 w-full border-b border-zinc-800 pb-1.5 font-bold text-[#0095B6] text-left px-2 flex items-center space-x-1"
            >
                <span>← Resolution</span>
            </button>
            {qualities.map((q) => (
                <button
                key={q}
                onClick={() => {
                    onQualityChange(q);
                    setPage("main");
                }}
                className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 hover:bg-zinc-800 transition-colors"
                >
                <span>{q}</span>
                {quality === q && <Check className="h-3.5 w-3.5 text-[#0095B6]" />}
                </button>
            ))}
            </div>
        )}

        {page === "subtitles" && (
            <div className="space-y-0.5">
            <button
                onClick={() => setPage("main")}
                className="mb-1 w-full border-b border-zinc-800 pb-1.5 font-bold text-[#0095B6] text-left px-2 flex items-center space-x-1"
            >
                <span>← Subtitles</span>
            </button>
            {subtitles.map((s) => (
                <button
                key={s}
                onClick={() => {
                    onSubtitleChange(s);
                    setPage("main");
                }}
                className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 hover:bg-zinc-800 transition-colors"
                >
                <span>{s}</span>
                {subtitle === s && <Check className="h-3.5 w-3.5 text-[#0095B6]" />}
                </button>
            ))}
            </div>
        )}
        </div>
    );
}