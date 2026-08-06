import { useState, useRef, useEffect, useCallback } from "react";

interface UseVideoPlayerOptions {
    onToggleTheatre?: () => void;
}

export function useVideoPlayer({ onToggleTheatre }: UseVideoPlayerOptions = {}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Playback/UI
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [showSettings, setShowSettings] = useState(false);

    // Media
    const [playbackRate, setPlaybackRate] = useState(1);
    const [quality, setQuality] = useState("1080p");
    const [subtitle, setSubtitle] = useState("Off");

    const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Inactivity Mode
    const resetControlsTimer = useCallback(() => {
        setShowControls(true);
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);

        controlsTimeoutRef.current = setTimeout(() => {
        if (videoRef.current && !videoRef.current.paused) {
            setShowControls(false);
            setShowSettings(false);
        }
        }, 3000);
    }, []);

    const handleMouseMove = useCallback(() => {
        resetControlsTimer();
    }, [resetControlsTimer]);

    const handleMouseLeave = useCallback(() => {
        if (isPlaying) {
        setShowControls(false);
        setShowSettings(false);
        }
    }, [isPlaying]);

    // Actions
    const togglePlay = useCallback(() => {
        if (!videoRef.current) return;
        if (isPlaying) {
        videoRef.current.pause();
        } else {
        videoRef.current.play();
        }
        setIsPlaying((prev) => !prev);
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
        setIsMuted((prev) => !prev);
    }, [isMuted]);

    const handleVolumeChange = useCallback((newVolume: number) => {
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
        if (videoRef.current) {
        videoRef.current.volume = newVolume;
        videoRef.current.muted = newVolume === 0;
        }
    }, []);

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

    const seekToTime = useCallback((time: number) => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = time;
        setCurrentTime(time);
    }, []);

    const togglePiP = useCallback(async () => {
        if (!videoRef.current) return;
        if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        } else {
        await videoRef.current.requestPictureInPicture();
        }
    }, []);

    const handleRateChange = useCallback((rate: number) => {
        setPlaybackRate(rate);
        if (videoRef.current) videoRef.current.playbackRate = rate;
    }, []);

    // Keyboard Shortcuts (0-9 numbers, space/k, f, m, j, l, t, p, arrows)
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
            handleVolumeChange(Math.min(1, volume + 0.1));
            break;
            case "arrowdown":
            e.preventDefault();
            handleVolumeChange(Math.max(0, volume - 0.1));
            break;
        }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [
        togglePlay,
        toggleFullscreen,
        toggleMute,
        seekRelative,
        seekToPercent,
        togglePiP,
        onToggleTheatre,
        handleVolumeChange,
        volume,
    ]);

    return {
        // Refs
        containerRef,
        videoRef,

        // State
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        isFullscreen,
        showControls,
        showSettings,
        playbackRate,
        quality,
        subtitle,
        isCursorHidden: !showControls && isPlaying,

        // Setters / Handlers
        setIsPlaying,
        setCurrentTime,
        setDuration,
        setShowSettings,
        setQuality,
        setSubtitle,
        handleRateChange,
        handleVolumeChange,
        handleMouseMove,
        handleMouseLeave,

        // Actions
        togglePlay,
        toggleFullscreen,
        toggleMute,
        seekRelative,
        seekToPercent,
        seekToTime,
        togglePiP,
    };
}