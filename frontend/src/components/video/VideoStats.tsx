import { formatViews, formatDate } from "../../utils/format";

interface VideoStatsProps {
    views: number;
    uploadedAt: string | Date;
}

export default function VideoStats({ views, uploadedAt }: VideoStatsProps) {
    return (
        <div className="mt-2 pt-1.5 border-t border-zinc-800/60 flex items-center text-xs text-zinc-400">
        <span>{formatViews(views)} views</span>
        <span className="mx-1.5 text-zinc-600">•</span>
        <span>{formatDate(uploadedAt)}</span>
        </div>
    );
}