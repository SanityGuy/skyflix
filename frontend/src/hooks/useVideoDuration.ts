import { useState, useEffect } from "react";

export function useVideoDuration(videoUrl?: string, fallbackDuration: number = 0) {
    const [duration, setDuration] = useState<number>(fallbackDuration);

    useEffect(() => {
        if (!videoUrl) return;

        const tempVideo = document.createElement("video");
        tempVideo.src = videoUrl;
        tempVideo.preload = "metadata";

        const handleLoadedMetadata = () => {
        if (tempVideo.duration && !isNaN(tempVideo.duration)) {
            setDuration(Math.floor(tempVideo.duration));
        }
        };

        tempVideo.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
        tempVideo.removeEventListener("loadedmetadata", handleLoadedMetadata);
        tempVideo.src = ""; 
        };
    }, [videoUrl]);

    return duration;
}