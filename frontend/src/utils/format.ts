export function formatViews(views: number): string {
    if (views >= 1_000_000_000) {
        return (views / 1_000_000_000).toFixed(1) + 'B';
    }

    if (views >= 1_000_000) {
        return (views / 1_000_000).toFixed(1) + 'M';
    }

    if (views >= 1_000) {
        return (views / 1_000).toFixed(0) + 'K';
    }

    return views.toString();
}

export function formatDislikes(dislikes: number): string {
    if (dislikes >= 1_000_000_000) {
        return (dislikes / 1_000_000_000).toFixed(1) + 'B';
    }

    if (dislikes >= 1_000_000) {
        return (dislikes / 1_000_000).toFixed(1) + 'M';
    }

    if (dislikes >= 1_000) {
        return (dislikes / 1_000).toFixed(1) + 'K';
    }

    return dislikes.toString();
}

export function formatLikes(likes: number): string {
    if (likes >= 1_000_000_000) {
        return (likes / 1_000_000_000).toFixed(1) + 'B';
    }

    if (likes >= 1_000_000) {
        return (likes / 1_000_000).toFixed(1) + 'M';
    }

    if (likes >= 1_000) {
        return (likes / 1_000).toFixed(1) + 'K';
    }

    return likes.toString();
}

export function formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
}

export function formatDate(dateInput: string | Date): string {
    const date = new Date(dateInput);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals: { label: string; seconds: number }[] = [
        { label: "century", seconds: 31536000 * 100 },
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "week", seconds: 604800 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
        }
    }

    return "just now";
}