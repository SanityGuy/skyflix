import type { Video } from "../types/video";

const videos: Video[] = [
    {
        id: "vid_001",

        title: "Su-57 Extreme Low Pass at MAKS Airshow",

        description:
            "The Sukhoi Su-57 performs an incredible low pass and aerobatic demonstration during the MAKS Airshow.",

        thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVV0KUgE9-yr5EFZ9gta1fS24W_QKXLGZWlaYMHQCrXwE5TE2FJYqjLpuU&s=10",

        duration: 623,

        uploadedAt: "2026-07-31T00:30:00.000Z",

        views: 2415231,

        likes: 183000,

        dislikes: 2900,

        comments: 8124,

        tags: [
            "su57",
            "airshow",
            "russia",
            "fighter",
        ],

        category: "airshow",

        creator: {
            id: "usr_001",

            username: "sanityguy",

            displayName: "SanityGuy",

            avatar: "https://www.svgrepo.com/show/452030/avatar-default.svg",

            subscribers: 15200,

            isVerified: true,

            isAdmin: true,
        },

        aircraft: {
            name: "Sukhoi Su-57",

            manufacturer: "Sukhoi",

            country: "Russia",

            type: "Multirole Fighter",
        },
    },

    {
        id: "vid_002",

        title: "A320 Butter Landing Compilation",

        description:
            "Some of the smoothest Airbus A320 landings captured around the world.",

        thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_cQ3fPrbzVuGaTUBD9bhZodDYn00lkXupzzkGeBOxq1yqEOtbG4W6GY&s=10",

        duration: 812,

        uploadedAt: "2026-01-31T08:00:00.000Z",

        views: 912430,

        likes: 72000,

        dislikes: 1100,

        comments: 2456,

        tags: [
            "a320",
            "landing",
            "airbus",
            "butter",
        ],

        category: "landing",

        creator: {
            id: "usr_002",

            username: "captainjoe",

            displayName: "Captain Joe",

            avatar: "https://www.svgrepo.com/show/452030/avatar-default.svg",

            subscribers: 840000,

            isVerified: true,

            isAdmin: false,
        },

        aircraft: {
            name: "Airbus A320neo",

            manufacturer: "Airbus",

            country: "France",

            type: "Airliner",
        },
    },

    {
        id: "vid_003",

        title: "Inside the Cockpit of a Boeing 777",

        description:
            "Experience a full cockpit tour and flight deck explanation before departure.",

        thumbnail:
            "https://i.ytimg.com/vi/arH2zzG2ju0/maxresdefault.jpg",

        duration: 1145,

        uploadedAt: "2024-02-04T13:20:00.000Z",

        views: 1563023,

        likes: 128000,

        dislikes: 1800,

        comments: 4910,

        tags: [
            "boeing777",
            "cockpit",
            "pilot",
            "aviation",
        ],

        category: "cockpit",

        creator: {
            id: "usr_003",

            username: "flightdeck",

            displayName: "FlightDeck",

            avatar: "https://www.svgrepo.com/show/452030/avatar-default.svg",

            subscribers: 430000,

            isVerified: false,

            isAdmin: false,
        },

        aircraft: {
            name: "Boeing 777-300ER",

            manufacturer: "Boeing",

            country: "United States",

            type: "Airliner",
        },
    },
];

export default videos;