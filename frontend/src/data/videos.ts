import type { Video } from "../types/video";
import type { Channel } from "../types/channel";

import sampleVideoUrl from "../assets/demo/SUGIRL.mp4";
import demoVideoUrl from "../assets/demo/WARNING.mp4";

import adminBanner from "../assets/banner/skyflix.jpg";

import sanityguyAvatar from "../assets/profile/sanityguy.jpg";
import adminAvatar from "../assets/logo/skyflix/skyflix_icon.png";
import defaultAvatar from "../assets/profile/default.jpg";

export const creators: Record<string, Channel> = {
    sanityguy: {
        id: "sanityguy",
        displayName: "SanityGuy",
        avatar: sanityguyAvatar,
        bannerUrl: adminBanner,
        subscribers: 69420999,
        country: "Russia",
        description: "SanityGuy is a developer and a video creator. He is passionate about technology and loves to share his knowledge with others. SanityGuy is also an avid fan of the video game series Minecraft.",
        email: "contact@sanityguy.dev",
        joinedDate: "Aug 1, 2026",
        isVerified: true,
        isAdmin: true,
    },
    "captain-joe": {
        id: "captain-joe",
        displayName: "Captain Joe",
        avatar: defaultAvatar,
        bannerUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
        subscribers: 2900000,
        country: "USA",
        description: "Captain Joe is an airline pilot sharing flight insights, aviation tips, and landing compilations.",
        email: "joe@aviation.com",
        joinedDate: "Aug 3, 2026",
        isVerified: true,
        isAdmin: false,
    },
    flightdeck: {
        id: "flightdeck",
        displayName: "FlightDeck",
        avatar: defaultAvatar,
        bannerUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200",
        subscribers: 2000000,
        country: "USA",
        description: "Inside look into commercial airliner cockpits, pre-flight checklists, and avionics.",
        email: "info@flightdeck.io",
        joinedDate: "Aug 5, 2026",
        isVerified: false,
        isAdmin: false,
    },
    skyflix: {
        id: "skyflix",
        displayName: "SkyFlix",
        avatar: adminAvatar,
        bannerUrl: adminBanner,
        subscribers: 4000000,
        country: "Indonesia",
        description: "This is the official channel of SkyFlix.",
        email: "contact@admin.dev",
        joinedDate: "Aug 14, 2026",
        isVerified: true,
        isAdmin: true,
    }
    };

    export const videos: Video[] = [
    {
        id: "demo",
        title: "SkyFlix Demo Video",
        description:
        "The first ever video uploaded to SkyFlix by SanityGuy. This video is a demo of the platform and is not affiliated with any aircraft manufacturer.",
        thumbnail:
        "https://i.ytimg.com/vi/U2z5QVdwPlQ/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAzOY3TzLzCvzZ9oefTH3s3kQ4yLQ",
        videoUrl: demoVideoUrl,
        duration: 53,
        uploadedAt: "2026-07-29T00:30:00.000Z",
        views: 69420999,
        likes: 69420999,
        dislikes: 0,
        category: "documentary",
        tags: ["demo", "jokes", "funny", "meme"],
        qualities: [
        { label: "1080p", src: sampleVideoUrl },
        { label: "720p", src: sampleVideoUrl },
        { label: "480p", src: sampleVideoUrl },
        ],
        creator: creators["skyflix"],
        aircraft: {
        name: "Toyota B380 Dreamlifter",
        manufacturer: "Toyota",
        country: "Indonesia",
        type: "Airline Car Mutation",
        },
    },
    {
        id: "dix26z0",
        title: "Su-57 Extreme Low Pass at MAKS Airshow",
        description:
        "The Sukhoi Su-57 performs an incredible low pass and aerobatic demonstration during the MAKS Airshow.",
        thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wtZQCh0jTUBQCatELcS9TgsjaaT-sSgBXpQr_q367GochqB3v9cMpsk&s=10",
        videoUrl: sampleVideoUrl,
        duration: 30,
        uploadedAt: "2026-07-31T00:30:00.000Z",
        views: 2415231,
        likes: 183000,
        dislikes: 2900,
        category: "airshow",
        tags: ["airshow", "su-57", "maks", "aerobatics"],
        qualities: [
        { label: "1080p", src: sampleVideoUrl },
        { label: "720p", src: sampleVideoUrl },
        ],
        creator: creators["sanityguy"],
        aircraft: {
        name: "Sukhoi Su-57",
        manufacturer: "Sukhoi",
        country: "Russia",
        type: "Stealth Fighter",
        },
    },
    {
        id: "28bi4he",
        title: "A320 Butter Landing Compilation",
        description:
        "Some of the smoothest Airbus A320 landings captured around the world.",
        thumbnail: "https://i.ytimg.com/vi/vo026XD-jeQ/maxresdefault.jpg",
        videoUrl: sampleVideoUrl,
        duration: 30,
        uploadedAt: "2026-01-31T08:00:00.000Z",
        views: 912430,
        likes: 72000,
        dislikes: 1100,
        category: "landing",
        tags: ["airbus", "a320", "landing", "butter"],
        qualities: [
        { label: "1080p", src: sampleVideoUrl },
        { label: "720p", src: sampleVideoUrl },
        ],
        creator: creators["captain-joe"],
        aircraft: {
        name: "Airbus A320neo",
        manufacturer: "Airbus",
        country: "European Union",
        type: "Commercial Airliner",
        },
    },
    {
        id: "9rxivs5",
        title: "Inside the Cockpit of a Boeing 777",
        description:
        "Experience a full cockpit tour and flight deck explanation before departure.",
        thumbnail: "https://i.ytimg.com/vi/arH2zzG2ju0/maxresdefault.jpg",
        videoUrl: sampleVideoUrl,
        duration: 30,
        uploadedAt: "2024-02-04T13:20:00.000Z",
        views: 1563023,
        likes: 128000,
        dislikes: 1800,
        category: "cockpit",
        tags: ["boeing", "777", "cockpit", "flightdeck"],
        qualities: [
        { label: "1080p", src: sampleVideoUrl },
        { label: "720p", src: sampleVideoUrl },
        ],
        creator: creators["flightdeck"],
        aircraft: {
        name: "Boeing 777-300ER",
        manufacturer: "Boeing",
        country: "United States",
        type: "Wide-body Airliner",
        },
    },
];

export default videos;