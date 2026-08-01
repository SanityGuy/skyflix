interface VideoActionsProps {
    subscribers: number;

    likes: number;
    dislikes: number;

    subscribed: boolean;
    liked: boolean;
    disliked: boolean;
    saved: boolean;

    onSubscribe: () => void;
    onLike: () => void;
    onDislike: () => void;
    onSave: () => void;
    onShare: () => void;
}