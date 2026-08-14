import { videos, creators } from "../data/videos";
import type { Channel } from "../types/channel";
import type { Video } from "../types/video";

export interface ChannelData {
    creator: Channel;
    videos: Video[];
    totalViews: number;
}

export function getChannelByHandle(handle: string): ChannelData | null {
    const cleanHandle = handle.replace(/^@/, "").toLowerCase();

    const creator = creators[cleanHandle] || 
        Object.values(creators).find((c) => c.id.toLowerCase() === cleanHandle);

    if (!creator) return null;

    const channelVideos = videos.filter(
        (v) => v.creator?.id.toLowerCase() === creator.id.toLowerCase()
    );

    const totalViews = channelVideos.reduce((acc, v) => acc + (v.views || 0), 0);

    return {
        creator,
        videos: channelVideos,
        totalViews,
    };
}

export function searchChannelVideos(channelVideos: Video[], query: string): Video[] {
    if (!query.trim()) return channelVideos;
    return channelVideos.filter((v) =>
        v.title.toLowerCase().includes(query.toLowerCase())
    );
}