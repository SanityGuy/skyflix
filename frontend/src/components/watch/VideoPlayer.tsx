import { useState, useRef, useEffect, useCallback } from "react";

import SettingsMenu from "./controls/SettingsMenu";
import VideoPlayerHUD from "./controls/VideoPlayerHUD";
import VideoHeader from "./controls/VideoHeader";
import VideoControls from "./controls/VideoControls";

const DEFAULT_VIDEO = "../../assets/demo/SUGIRL.mp4";

interface VideoPlayerProps {
    poster?: string;
    src?: string;
    title?: string;
    onToggleTheatre?: () => void;
    isTheatreMode?: boolean;
}

export default function VideoPlayer({
    poster,
    src = DEFAULT_VIDEO,
    title = "SUGIRL - Official Video",
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
        }, 2000);
    }, [isPlaying]);

    const handleMouseMove = () => resetControlsTimer();

    const handleMouseLeave = () => {
        if (isPlaying) {
        setShowControls(false);
        setShowSettings(false);
        }
    };

    const togglePlay = useCallback(() => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
        videoRef.current.play().catch((e) => console.warn("Play blocked:", e));
        } else {
        videoRef.current.pause();
        }
        resetControlsTimer();
    }, [resetControlsTimer]);

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

    const handleVolumeChange = (val: number) => {
        setVolume(val);
        setIsMuted(val === 0);
        if (videoRef.current) videoRef.current.volume = val;
    };

    const seekRelative = useCallback((seconds: number) => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = Math.max(
        0,
        Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds)
        );
    }, []);

    const seekTo = (time: number) => {
        if (videoRef.current) videoRef.current.currentTime = time;
        setCurrentTime(time);
    };

    const seekToPercent = useCallback(
        (percent: number) => {
        if (!videoRef.current || !duration) return;
        const targetTime = (percent / 100) * duration;
        seekTo(targetTime);
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

    const volumeRef = useRef(volume);
    useEffect(() => {
        volumeRef.current = volume;
    }, [volume]);
    
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.play().catch((e) => {
        console.warn("Autoplay blocked by browser policy:", e);
        });
    }, [src]);

    useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) return;

        if (/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        seekToPercent(parseInt(e.key, 10) * 10);
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
            handleVolumeChange(Math.min(1, volumeRef.current + 0.1));
            break;
        case "arrowdown":
            e.preventDefault();
            handleVolumeChange(Math.max(0, volumeRef.current - 0.1));
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

        <VideoHeader
            title={title}
            showControls={showControls}
            isFullscreen={isFullscreen}
        />

        <video
            ref={videoRef}
            src={src}
            poster={poster}
            playsInline
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
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

        <VideoControls
        showControls={showControls}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        isMuted={isMuted}
        isFullscreen={isFullscreen}
        showSettings={showSettings}
        isTheatreMode={isTheatreMode}
        onTogglePlay={togglePlay}
        onSeekRelative={seekRelative}
        onSeekTo={seekTo}
        onToggleMute={toggleMute}
        onVolumeChange={handleVolumeChange}
        onToggleSettings={() => setShowSettings(!showSettings)}
        onTogglePiP={togglePiP}
        onToggleTheatre={onToggleTheatre}
        onToggleFullscreen={toggleFullscreen}
        />
        </div>
    );
}