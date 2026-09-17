import videos from "../data/videos";
import type { Video } from "../types/video";

export const getVideos = (): Video[] => {
    return videos;
};

export const getVideoById = (id?: string): Video | undefined => {
    if (!id) return undefined;
    return videos.find((video) => video.id === id);
};

export const searchVideos = (query: string): Video[] => {
    const q = query.toLowerCase().trim();
    if (!q) return videos;

    return videos.filter((video) => {
        const titleMatch = video.title.toLowerCase().includes(q);
        const descMatch = video.description?.toLowerCase().includes(q) ?? false;
        const tagMatch = video.tags?.some((tag) => tag.toLowerCase().includes(q)) ?? false;
        const creatorMatch = video.creator?.displayName?.toLowerCase().includes(q) ?? false;
        const aircraftMatch = video.aircraft?.name?.toLowerCase().includes(q) ?? false;

        return titleMatch || descMatch || tagMatch || creatorMatch || aircraftMatch;
    });
};


export const getVideosByCategory = (category: string): Video[] => {
    if (!category || category.toLowerCase() === "all") return videos;
    return videos.filter(
        (video) => video.category?.toLowerCase() === category.toLowerCase()
    );
};

export const getVideosByChannel = (channelHandleOrId: string): Video[] => {
    const target = channelHandleOrId.toLowerCase().replace(/^@/, "");
    return videos.filter((video) => {
        const creatorId = video.creator?.id?.toLowerCase();
        const creatorSlug = video.creator?.displayName?.toLowerCase().replace(/\s+/g, "_");
        return creatorId === target || creatorSlug === target;
    });
};