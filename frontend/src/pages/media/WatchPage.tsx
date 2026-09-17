import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Radio } from "lucide-react";

import { getVideoById, getVideos } from "../../services/videoServices";
import VideoPlayer from "../../components/watch/VideoPlayer";
import VideoTitle from "../../components/watch/VideoTitle";
import VideoActions from "../../components/watch/VideoActions";
import VideoDescription from "../../components/watch/VideoDescription";
import CommentSection from "../../components/watch/CommentSection";
import RecommendedVideos from "../../components/watch/RecommendedVideos";

export default function WatchPage() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v") ?? undefined;

    const video = getVideoById(id);
    const allVideos = getVideos();

    const [likes, setLikes] = useState(video?.likes || 0);
    const [dislikes, setDislikes] = useState(video?.dislikes || 0);

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
                <div className="space-y-6">
                    <div className="w-full bg-black/40 rounded-2xl p-2 lg:p-4 border border-zinc-800/50 backdrop-blur-sm">
                        <VideoPlayer
                            poster={video.thumbnail}
                            src={video.videoUrl}
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
                                subscribers={video.creator?.subscribers || 0}
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
                                tags={video.tags}
                                aircraft={video.aircraft}
                                aircraftName={video.aircraft?.name}
                            />

                            <CommentSection />
                        </div>

                        <div>
                            <RecommendedVideos videos={allVideos} currentVideoId={video.id} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-3">
                        <VideoPlayer
                            poster={video.thumbnail}
                            src={video.videoUrl}
                            title={video.title}
                            isTheatreMode={isTheatreMode}
                            onToggleTheatre={handleToggleTheatre}
                        />

                        <VideoTitle title={video.title} />

                        <VideoActions
                            creator={video.creator}
                            subscribers={video.creator?.subscribers || 0}
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
                            tags={video.tags}
                            aircraft={video.aircraft}
                            aircraftName={video.aircraft?.name}
                        />

                        <CommentSection />
                    </div>

                    <div>
                        <RecommendedVideos videos={allVideos} currentVideoId={video.id} />
                    </div>
                </div>
            )}
        </div>
    );
}