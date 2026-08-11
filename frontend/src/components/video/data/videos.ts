import type { Video } from "../types/video";

import sampleVideoUrl from "../../../assets/demo/SUGIRL.mp4";
import demoVideoUrl from "../../../assets/demo/WARNING.mp4";

export const videos: Video[] = [
    {
        id: "demo",
        title: "SkyFlix Demo Video",
        description:
        "The first ever video uploaded to SkyFlix by SanityGuy. This video is a demo of the platform and is not affiliated with any aircraft manufacturer.",
        thumbnail:
        "https://i.ytimg.com/vi/U2z5QVdwPlQ/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAzOY3TzLzCvzZ9oefTH3s3kQ4yLQ",
        videoUrl: demoVideoUrl,
        duration: 300,
        uploadedAt: "2026-07-29T00:30:00.000Z",
        views: 9999999999,
        likes: 9999999999,
        dislikes: 0,

        category: "documentary",
        tags: ["demo"],
        qualities: [
        { label: "1080p", src: sampleVideoUrl },
        { label: "720p", src: sampleVideoUrl },
        { label: "480p", src: sampleVideoUrl },
        ],

        creator: {
        id: "sanityguy",
        displayName: "SanityGuy",
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdc4ogUglKIS9XLLsVJGOyQZXVRK8ZJzDxN9qrlvKzU94sMcXbynob-l1&s=10",
        isVerified: true,
        isAdmin: true,
        },

        aircraft: {
        name: "Sukhoi Su-27",
        manufacturer: "Sukhoi",
        country: "Russia",
        type: "Fighter Jet",
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
        duration: 623,
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
        creator: {
        id: "sanityguy",
        displayName: "SanityGuy",
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdc4ogUglKIS9XLLsVJGOyQZXVRK8ZJzDxN9qrlvKzU94sMcXbynob-l1&s=10",
        isVerified: true,
        isAdmin: true,
        },
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
        duration: 812,
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
        creator: {
        id: "captain-joe",
        displayName: "Captain Joe",
        avatar: "https://www.svgrepo.com/show/452030/avatar-default.svg",
        isVerified: true,
        isAdmin: false,
        },
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
        duration: 1145,
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
        creator: {
        id: "flightdeck",
        displayName: "FlightDeck",
        avatar: "https://www.svgrepo.com/show/452030/avatar-default.svg",
        isVerified: false,
        isAdmin: false,
        },
        aircraft: {
        name: "Boeing 777-300ER",
        manufacturer: "Boeing",
        country: "United States",
        type: "Wide-body Airliner",
        },
    },
];

export default videos;