import type { Channel } from "./channel";

export interface SubtitleTrack {
    id: string;
    label: string;
    language: string;
    src?: string;
}

export interface VideoQuality {
    label: string; 
    src: string;
}

export interface AircraftInfo {
    name?: string;
    manufacturer?: string;
    country?: string;
    type?: string;
}

export interface Video {
    id: string;
    title: string;
    description?: string;
    videoUrl: string;
    thumbnail: string;
    views: number;
    duration: number;
    likes: number;
    dislikes: number;
    uploadedAt: string | Date;
    qualities?: VideoQuality[];
    subtitles?: SubtitleTrack[];
    category?: string;
    tags?: string[];
    aircraft?: AircraftInfo;
    creator?: Channel;
}