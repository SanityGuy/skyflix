import { Volume2, Volume1, VolumeX } from "lucide-react";

interface VolumeControlProps {
    volume: number;
    isMuted: boolean;
    onToggleMute: () => void;
    onVolumeChange: (volume: number) => void;
}

export default function VolumeControl({
    volume,
    isMuted,
    onToggleMute,
    onVolumeChange,
}: VolumeControlProps) {
    const currentVolume = isMuted ? 0 : volume;

    const getIcon = () => {
        if (isMuted || currentVolume === 0) return <VolumeX className="h-5 w-5" />;
        if (currentVolume < 0.5) return <Volume1 className="h-5 w-5" />;
        return <Volume2 className="h-5 w-5" />;
    };

    return (
        <div className="group/vol flex items-center pl-1">
        <button
            onClick={onToggleMute}
            className="p-1.5 text-zinc-300 hover:text-[#0095B6] transition-colors rounded-lg hover:bg-white/5 active:scale-95"
            title={isMuted ? "Unmute (m)" : "Mute (m)"}
        >
            {getIcon()}
        </button>

        <div className="flex items-center w-0 opacity-0 group-hover/vol:w-20 group-hover/vol:opacity-100 transition-all duration-300 ease-out overflow-hidden px-1">
            <div className="relative flex items-center w-full h-6 cursor-pointer">
            <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={currentVolume}
                onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
            />

            <div className="w-full h-1 bg-zinc-600/60 rounded-full overflow-hidden">

                <div
                className="h-full bg-[#0095B6] rounded-full transition-all duration-75"
                style={{ width: `${currentVolume * 100}%` }}
                />
            </div>

            <div
                className="absolute h-3 w-3 bg-white rounded-full shadow-md top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-transform duration-100 scale-100"
                style={{ left: `${currentVolume * 100}%` }}
            />
            </div>
        </div>
        </div>
    );
}