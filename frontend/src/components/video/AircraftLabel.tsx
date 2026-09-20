import { Plane } from "lucide-react";

interface AircraftLabelProps {
    name?: string;
}

export default function AircraftLabel({ name }: AircraftLabelProps) {
    if (!name) return null;

    return (
        <div className="mt-1 flex items-center space-x-1.5 text-xs text-zinc-400 bg-zinc-900/90 px-2 py-0.5 rounded-xl border border-zinc-800/60 backdrop-blur-sm w-fit">
        <Plane className="h-3 w-3 text-[#0095B6] shrink-0" />
        <span className="truncate font-medium text-zinc-300">{name}</span>
        </div>
    );
}