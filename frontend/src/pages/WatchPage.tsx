import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Radio } from "lucide-react";

import videos from "../components/video/data/videos";
import VideoPlayer from "../components/watch/VideoPlayer";
import VideoTitle from "../components/watch/VideoTitle";
import VideoActions from "../components/watch/VideoActions";
import VideoDescription from "../components/watch/VideoDescription";
import CommentSection from "../components/watch/CommentSection";
import RecommendedVideos from "../components/watch/RecommendedVideos";

export default function WatchPage() {
    const { id } = useParams<{ id: string }>();
    const video = videos.find((v) => v.id === id);

    const [likes, setLikes] = useState(video?.likes || 1200);
    const [dislikes, setDislikes] = useState(video?.dislikes || 12);

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isTheatreMode, setIsTheatreMode] = useState(false);

    if (!video) {
        return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center text-zinc-300">
            <Radio className="mb-4 h-12 w-12 animate-pulse text-[#0095B6]" />
            <h1 className="text-2xl font-bold text-white">Video Signal Not Found</h1>
            <p className="mt-1 text-sm text-zinc-400">
            The video you are trying to watch does not exist or has been removed.
            </p>
            <Link
            to="/"
            className="mt-6 rounded-full bg-[#0095B6] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#00819e]"
            >
            Return to Home
            </Link>
        </div>
        );
    }

    const handleLike = () => {
        if (isLiked) {
        setIsLiked(false);
        setLikes((prev) => prev - 1);
        } else {
        setIsLiked(true);
        setLikes((prev) => prev + 1);
        if (isDisliked) {
            setIsDisliked(false);
            setDislikes((prev) => prev - 1);
        }
        }
    };

    const handleDislike = () => {
        if (isDisliked) {
        setIsDisliked(false);
        setDislikes((prev) => prev - 1);
        } else {
        setIsDisliked(true);
        setDislikes((prev) => prev + 1);
        if (isLiked) {
            setIsLiked(false);
            setLikes((prev) => prev - 1);
        }
        }
    };

    const handleToggleTheatre = () => {
        setIsTheatreMode((prev) => !prev);
    };

    return (
        <div
        className={`mx-auto p-4 lg:p-6 text-white transition-all duration-300 ${
            isTheatreMode ? "max-w-none" : "max-w-[1750px]"
        }`}
        >
        {isTheatreMode ? (
            /* Theatre Mode Layout: Video spans full width at the top */
            <div className="space-y-6">
            <div className="w-full bg-black/40 rounded-2xl p-2 lg:p-4 border border-zinc-800/50 backdrop-blur-sm">
                <VideoPlayer
                poster={video.thumbnail}
                src={(video as { videoUrl?: string; src?: string }).videoUrl || (video as { videoUrl?: string; src?: string }).src}
                title={video.title}
                isTheatreMode={isTheatreMode}
                onToggleTheatre={handleToggleTheatre}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                <VideoTitle title={video.title} />

                <VideoActions
                    creator={video.creator}
                    subscribers={128000}
                    likes={likes}
                    dislikes={dislikes}
                    subscribed={isSubscribed}
                    liked={isLiked}
                    disliked={isDisliked}
                    saved={isSaved}
                    onSubscribe={() => setIsSubscribed((prev) => !prev)}
                    onLike={handleLike}
                    onDislike={handleDislike}
                    onSave={() => setIsSaved((prev) => !prev)}
                />

                <VideoDescription
                    views={video.views}
                    uploadedAt={video.uploadedAt}
                    description={video.description}
                    aircraftName={video.aircraft?.name}
                />

                <CommentSection />
                </div>

                <div>
                <RecommendedVideos videos={videos} currentVideoId={video.id} />
                </div>
            </div>
            </div>
        ) : (
            /* Standard Layout: 2-Column Grid with side recommendations */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
                <VideoPlayer
                poster={video.thumbnail}
                src={(video as { videoUrl?: string; src?: string }).videoUrl || (video as { videoUrl?: string; src?: string }).src}
                title={video.title}
                isTheatreMode={isTheatreMode}
                onToggleTheatre={handleToggleTheatre}
                />

                <VideoTitle title={video.title} />

                <VideoActions
                creator={video.creator}
                subscribers={128000}
                likes={likes}
                dislikes={dislikes}
                subscribed={isSubscribed}
                liked={isLiked}
                disliked={isDisliked}
                saved={isSaved}
                onSubscribe={() => setIsSubscribed((prev) => !prev)}
                onLike={handleLike}
                onDislike={handleDislike}
                onSave={() => setIsSaved((prev) => !prev)}
                />

                <VideoDescription
                views={video.views}
                uploadedAt={video.uploadedAt}
                description={video.description}
                aircraftName={video.aircraft?.name}
                />

                <CommentSection />
            </div>

            <div>
                <RecommendedVideos videos={videos} currentVideoId={video.id} />
            </div>
            </div>
        )}
        </div>
    );
}