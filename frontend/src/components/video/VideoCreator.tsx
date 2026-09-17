import { BadgeCheck, ShieldCheck } from "lucide-react";

export interface CreatorData {
    displayName?: string;
    avatar?: string;
    isVerified?: boolean;
    isAdmin?: boolean;
}

interface VideoCreatorProps {
    creator?: CreatorData;
}

export function CreatorAvatar({ creator }: VideoCreatorProps) {
    return (
        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-zinc-800 border border-zinc-700/60 group-hover:border-[#0095B6] transition-colors">
        {creator?.avatar ? (
            <img
            src={creator.avatar}
            alt={creator.displayName || "Creator"}
            className="h-full w-full object-cover"
            />
        ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs font-bold text-[#0095B6]">
            {creator?.displayName?.[0] || "S"}
            </div>
        )}
        </div>
    );
}

export function CreatorBadge({ creator }: VideoCreatorProps) {
    if (creator?.isAdmin) {
        return <ShieldCheck className="h-3.5 w-3.5 text-[#CD2500] shrink-0" />;
    }
    if (creator?.isVerified) {
        return <BadgeCheck className="h-3.5 w-3.5 text-[#BED6D8] shrink-0" />;
    }
    return null;
}