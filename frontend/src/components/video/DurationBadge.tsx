import { formatDuration } from "../../utils/format";

interface DurationBadgeProps {
    duration: number;
}

export default function DurationBadge({ duration }: DurationBadgeProps) {
    return (
        <span className="absolute bottom-2 right-2 rounded bg-zinc-950/85 px-1.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
        {formatDuration(duration)}
        </span>
    );
}