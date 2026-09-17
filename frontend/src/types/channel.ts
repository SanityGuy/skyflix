export interface Channel {
    id: string;
    displayName: string;
    subscribers: number;
    avatar: string;
    bannerUrl?: string;
    country?: string;
    description?: string;
    email?: string;
    joinedDate?: string;
    isVerified?: boolean;
    isAdmin?: boolean;
}