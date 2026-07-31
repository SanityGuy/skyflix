interface Video {
    
    id: string;
    title: string;

    description: string;
    thumbnail: string;
    duration: number; // seconds
    uploadedAt: string;
    
    views: number;
    likes: number;
    dislikes: number;
    comments: number;

    tags: string[];
    category:
        | "airshow"
        | "cockpit"
        | "landing"
        | "takeoff"
        | "tutorial"
        | "documentary"
        | "dogfight";

    creator: {
        id: string;
        username: string;
        displayName: string;
        avatar: string;
        subscribers: number;
        isVerified: boolean;
        isAdmin: boolean;
    };

    aircraft: {
        name: string;
        manufacturer: string;
        country: string;
        type: string;
    };
}