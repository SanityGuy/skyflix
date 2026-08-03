import React, { useState } from "react";

interface SeekBarProps {
    currentTime: number;
    duration: number;
    onSeek: (time: number) => void;
}

const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export default function SeekBar({ currentTime, duration, onSeek }: SeekBarProps) {
    const [hoverTime, setHoverTime] = useState<number | null>(null);
    const [hoverPosition, setHoverPosition] = useState<number>(0);

    const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = pos / rect.width;
        setHoverPosition(pos);
        setHoverTime(percentage * duration);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(e.clientX - rect.left, rect.width)) / rect.width;
        onSeek(percentage * duration);
    };

    return (
        <div
        className="group relative flex h-3 w-full cursor-pointer items-center py-1"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverTime(null)}
        onClick={handleClick}
        >
        {hoverTime !== null && (
            <div
            className="absolute -top-7 transform -translate-x-1/2 rounded bg-zinc-900/90 border border-[#0095B6]/60 px-1.5 py-0.5 text-[10px] font-mono text-[#0095B6] shadow-lg pointer-events-none"
            style={{ left: `${hoverPosition}px` }}
            >
            {formatTime(hoverTime)}
            </div>
        )}

        <div className="relative h-1 w-full rounded-full bg-zinc-800 transition-all group-hover:h-2">
            <div className="absolute top-0 left-0 h-full w-[40%] rounded-full bg-zinc-700/60" />
            <div
            className="absolute top-0 left-0 h-full rounded-full bg-[#0095B6] transition-all"
            style={{ width: `${progressPercent}%` }}
            />
            <div
            className="absolute top-1/2 -mt-2 -ml-2 h-4 w-4 transform scale-0 rounded-full bg-white border-2 border-[#0095B6] shadow-md transition-transform group-hover:scale-100"
            style={{ left: `${progressPercent}%` }}
            />
        </div>
        </div>
    );
}