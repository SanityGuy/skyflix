export interface SubtitleTrack {
    id: string;
    label: string;
    language: string;
    src?: string;
}

export interface VideoQuality {
    label: string; // 
    src: string;
}

export interface Video {
    id: string;
    title: string;
    description?: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    views: number;
    likes: number;
    dislikes: number;
    uploadedAt: string | Date;
    qualities?: VideoQuality[];
    subtitles?: SubtitleTrack[];
    creator?: {
        displayName?: string;
        avatar?: string;
        isVerified?: boolean;
        isAdmin?: boolean;
    };
    aircraft?: {
        name?: string;
        code?: string;
    };
}