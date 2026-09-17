import {
    Play,
    Pause,
    RotateCcw,
    RotateCw,
    Maximize,
    Minimize,
    Settings,
    PictureInPicture2,
    Tv,
} from "lucide-react";

import SeekBar from "./SeekBar";
import VolumeControl from "./VolumeControl";
import TooltipButton from "./TooltipButton";

interface VideoControlsProps {
    showControls: boolean;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    isFullscreen: boolean;
    showSettings: boolean;
    isTheatreMode?: boolean;
    onTogglePlay: () => void;
    onSeekRelative: (seconds: number) => void;
    onSeekTo: (time: number) => void;
    onToggleMute: () => void;
    onVolumeChange: (val: number) => void;
    onToggleSettings: () => void;
    onTogglePiP: () => void;
    onToggleTheatre?: () => void;
    onToggleFullscreen: () => void;
}

const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export default function VideoControls({
    showControls,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isFullscreen,
    showSettings,
    isTheatreMode = false,
    onTogglePlay,
    onSeekRelative,
    onSeekTo,
    onToggleMute,
    onVolumeChange,
    onToggleSettings,
    onTogglePiP,
    onToggleTheatre,
    onToggleFullscreen,
}: VideoControlsProps) {
    return (
        <div
        className={`absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent p-3 pt-10 transition-all duration-300 ${
            showControls
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        >
        <SeekBar currentTime={currentTime} duration={duration} onSeek={onSeekTo} />

        <div className="mt-2 flex items-center justify-between text-white">
            <div className="flex items-center space-x-2">
            <TooltipButton
                onClick={onTogglePlay}
                title={isPlaying ? "Pause" : "Play"}
                shortcut="k"
            >
                {isPlaying ? (
                <Pause className="h-5 w-5" />
                ) : (
                <Play className="h-5 w-5 fill-current" />
                )}
            </TooltipButton>

            <div className="hidden sm:block">
                <TooltipButton
                onClick={() => onSeekRelative(-10)}
                title="Rewind 10s"
                shortcut="j"
                >
                <RotateCcw className="h-4 w-4" />
                </TooltipButton>
            </div>

            <div className="hidden sm:block">
                <TooltipButton
                onClick={() => onSeekRelative(10)}
                title="Forward 10s"
                shortcut="l"
                >
                <RotateCw className="h-4 w-4" />
                </TooltipButton>
            </div>

            <VolumeControl
                volume={volume}
                isMuted={isMuted}
                onToggleMute={onToggleMute}
                onVolumeChange={onVolumeChange}
            />

            <div className="text-xs font-medium text-zinc-300 space-x-1 pl-2">
                <span className="text-white font-semibold">
                {formatTime(currentTime)}
                </span>
                <span className="text-zinc-600">/</span>
                <span>{formatTime(duration)}</span>
            </div>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-1.5">
            <TooltipButton
                onClick={onToggleSettings}
                title="Settings"
                active={showSettings}
            >
                <Settings
                className={`h-5 w-5 transition-transform duration-300 ${
                    showSettings ? "rotate-45" : ""
                }`}
                />
            </TooltipButton>

            <div className="hidden sm:block">
                <TooltipButton
                onClick={onTogglePiP}
                title="Picture in Picture"
                shortcut="p"
                >
                <PictureInPicture2 className="h-5 w-5" />
                </TooltipButton>
            </div>

            {onToggleTheatre && (
                <div className="hidden sm:block">
                <TooltipButton
                    onClick={onToggleTheatre}
                    title="Theatre Mode"
                    shortcut="t"
                    active={isTheatreMode}
                >
                    <Tv className="h-5 w-5" />
                </TooltipButton>
                </div>
            )}

            <TooltipButton
                onClick={onToggleFullscreen}
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                shortcut="f"
            >
                {isFullscreen ? (
                <Minimize className="h-5 w-5" />
                ) : (
                <Maximize className="h-5 w-5" />
                )}
            </TooltipButton>
            </div>
        </div>
        </div>
    );
}