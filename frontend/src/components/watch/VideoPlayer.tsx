import React, { useState, useRef, useEffect, useCallback } from "react";
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

import SeekBar from "./controls/SeekBar";
import VolumeControl from "./controls/VolumeControl";
import SettingsMenu from "./controls/SettingsMenu";
import VideoPlayerHUD from "./controls/VideoPlayerHUD";

const DEFAULT_VIDEO =
    "https://static.videezy.com/system/resources/previews/000/016/140/original/plane_parking_at_gate.mp4";

interface VideoPlayerProps {
    poster?: string;
    src?: string;
    title?: string;
    onToggleTheatre?: () => void;
    isTheatreMode?: boolean;
}

const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

interface TooltipButtonProps {
    onClick: () => void;
    title: string;
    shortcut?: string;
    active?: boolean;
    className?: string;
    children: React.ReactNode;
}

function TooltipButton({
    onClick,
    title,
    shortcut,
    active,
    className = "",
    children,
}: TooltipButtonProps) {
    return (
        <div className="group/btn relative flex items-center justify-center">
        <button
            onClick={onClick}
            className={`p-1.5 hover:text-[#0095B6] transition-all duration-200 rounded-lg hover:bg-white/5 active:scale-95 ${
            active ? "text-[#0095B6]" : "text-zinc-300"
            } ${className}`}
        >
            {children}
        </button>

        <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/btn:opacity-100 transition-all duration-200 pointer-events-none z-40 whitespace-nowrap rounded bg-zinc-900/95 border border-zinc-700/60 px-2 py-1 text-[10px] font-mono text-zinc-200 shadow-xl backdrop-blur-md translate-y-1 group-hover/btn:translate-y-0">
            <span>{title}</span>
            {shortcut && <span className="ml-1 text-[#0095B6]">({shortcut})</span>}
        </div>
        </div>
    );
}

export default function VideoPlayer({
    poster,
    src = DEFAULT_VIDEO,
    onToggleTheatre,
    isTheatreMode = false,
}: VideoPlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [showSettings, setShowSettings] = useState(false);

    const [playbackRate, setPlaybackRate] = useState(1);
    const [quality, setQuality] = useState("1080p");
    const [subtitle, setSubtitle] = useState("Off");

    const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const resetControlsTimer = useCallback(() => {
        setShowControls(true);
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);

        controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) {
            setShowControls(false);
            setShowSettings(false);
        }
        }, 3000);
    }, [isPlaying]);

    const handleMouseMove = () => {
        resetControlsTimer();
    };

    const handleMouseLeave = () => {
        if (isPlaying) {
        setShowControls(false);
        setShowSettings(false);
        }
    };

    const togglePlay = useCallback(() => {
        if (!videoRef.current) return;
        if (isPlaying) {
        videoRef.current.pause();
        } else {
        videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
        resetControlsTimer();
    }, [isPlaying, resetControlsTimer]);

    const toggleFullscreen = useCallback(() => {
        if (!containerRef.current) return;
        if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
        setIsFullscreen(true);
        } else {
        document.exitFullscreen();
        setIsFullscreen(false);
        }
    }, []);

    const toggleMute = useCallback(() => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    }, [isMuted]);

    const seekRelative = useCallback((seconds: number) => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = Math.max(
        0,
        Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds)
        );
    }, []);

    const seekToPercent = useCallback(
        (percent: number) => {
        if (!videoRef.current || !duration) return;
        const targetTime = (percent / 100) * duration;
        videoRef.current.currentTime = targetTime;
        setCurrentTime(targetTime);
        },
        [duration]
    );

    const togglePiP = async () => {
        if (!videoRef.current) return;
        if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        } else {
        await videoRef.current.requestPictureInPicture();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
        if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) return;

        if (/^[0-9]$/.test(e.key)) {
            e.preventDefault();
            const percent = parseInt(e.key, 10) * 10;
            seekToPercent(percent);
            return;
        }

        switch (e.key.toLowerCase()) {
            case " ":
            case "k":
            e.preventDefault();
            togglePlay();
            break;
            case "f":
            e.preventDefault();
            toggleFullscreen();
            break;
            case "m":
            e.preventDefault();
            toggleMute();
            break;
            case "j":
            case "arrowleft":
            e.preventDefault();
            seekRelative(-5);
            break;
            case "l":
            case "arrowright":
            e.preventDefault();
            seekRelative(5);
            break;
            case "t":
            e.preventDefault();
            if (onToggleTheatre) onToggleTheatre();
            break;
            case "i":
            case "p":
            e.preventDefault();
            togglePiP();
            break;
            case "arrowup":
            e.preventDefault();
            setVolume((v) => {
                const next = Math.min(1, v + 0.1);
                if (videoRef.current) videoRef.current.volume = next;
                return next;
            });
            break;
            case "arrowdown":
            e.preventDefault();
            setVolume((v) => {
                const next = Math.max(0, v - 0.1);
                if (videoRef.current) videoRef.current.volume = next;
                return next;
            });
            break;
        }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [togglePlay, toggleFullscreen, toggleMute, seekRelative, seekToPercent, onToggleTheatre]);

    const isCursorHidden = !showControls && isPlaying;

    return (
        <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative aspect-video w-full overflow-hidden rounded-2xl bg-black border border-zinc-800/80 shadow-2xl select-none transition-all duration-300 ${
            isCursorHidden ? "cursor-none" : "cursor-default"
        }`}
        >
        <VideoPlayerHUD isVisible={showControls} />

        <video
            ref={videoRef}
            src={src}
            poster={poster}
            onClick={togglePlay}
            onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
            onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
            onEnded={() => setIsPlaying(false)}
            className={`h-full w-full object-contain ${
            isCursorHidden ? "cursor-none" : "cursor-pointer"
            }`}
        />

        {showSettings && (
            <SettingsMenu
            playbackRate={playbackRate}
            quality={quality}
            subtitle={subtitle}
            onRateChange={(r) => {
                setPlaybackRate(r);
                if (videoRef.current) videoRef.current.playbackRate = r;
            }}
            onQualityChange={setQuality}
            onSubtitleChange={setSubtitle}
            onClose={() => setShowSettings(false)}
            />
        )}

        <div
            className={`absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent p-3 pt-10 transition-all duration-300 ${
            showControls
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
        >
            <SeekBar
            currentTime={currentTime}
            duration={duration}
            onSeek={(time) => {
                if (videoRef.current) videoRef.current.currentTime = time;
                setCurrentTime(time);
            }}
            />

            <div className="mt-2 flex items-center justify-between text-white">
            <div className="flex items-center space-x-2">
                <TooltipButton
                onClick={togglePlay}
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
                    onClick={() => seekRelative(-10)}
                    title="Rewind 10s"
                    shortcut="j"
                >
                    <RotateCcw className="h-4 w-4" />
                </TooltipButton>
                </div>

                <div className="hidden sm:block">
                <TooltipButton
                    onClick={() => seekRelative(10)}
                    title="Forward 10s"
                    shortcut="l"
                >
                    <RotateCw className="h-4 w-4" />
                </TooltipButton>
                </div>

                <VolumeControl
                volume={volume}
                isMuted={isMuted}
                onToggleMute={toggleMute}
                onVolumeChange={(val) => {
                    setVolume(val);
                    setIsMuted(val === 0);
                    if (videoRef.current) videoRef.current.volume = val;
                }}
                />

                <div className="text-xs font-mono text-zinc-300 space-x-1 pl-2">
                <span className="text-white font-semibold">
                    {formatTime(currentTime)}
                </span>
                <span className="text-zinc-600">/</span>
                <span>{formatTime(duration)}</span>
                </div>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-1.5">
                <TooltipButton
                onClick={() => setShowSettings(!showSettings)}
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
                    onClick={togglePiP}
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
                onClick={toggleFullscreen}
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
        </div>
    );
}