export type VideoCategory =
    | "airshow"
    | "cockpit"
    | "landing"
    | "takeoff"
    | "tutorial"
    | "documentary"
    | "dogfight";

export interface Creator {
    id: string;

    username: string;

    displayName: string;

    avatar: string;

    subscribers: number;

    isVerified: boolean;

    isAdmin: boolean;
}

export interface Aircraft {
    name: string;

    manufacturer: string;

    country: string;

    type: string;
}

export interface Video {
    id: string;

    title: string;

    description: string;

    thumbnail: string;

    duration: number;

    uploadedAt: string;

    views: number;

    likes: number;

    dislikes: number;

    comments: number;

    tags: string[];

    category: VideoCategory;

    creator: Creator;

    aircraft: Aircraft;
}