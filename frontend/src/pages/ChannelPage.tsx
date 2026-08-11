import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";
import videos from "../components/video/data/videos";

function ChannelPage() {
    const { handle } = useParams<{ handle: string }>();
    const cleanHandle = handle ? handle.replace(/^@/, "").toLowerCase() : "";
    const matchedVideo = videos.find(
        (v) => v.creator?.id?.toLowerCase() === cleanHandle
    );
    const creator = matchedVideo?.creator;

    return (
        <div className="flex flex-col items-center justify-center py-20 text-center text-zinc-400">
        <h1 className="text-2xl font-bold text-zinc-200">Channel Page</h1>

        {creator ? (
            <div className="mt-4 flex flex-col items-center gap-2">
            <img
                src={creator.avatar}
                alt={creator.displayName}
                className="h-20 w-20 rounded-full border-2 border-[#0095B6] object-cover shadow-lg"
            />
            <h2 className="text-xl font-semibold text-white">
                {creator.displayName}
            </h2>
            <p className="text-xs font-mono text-zinc-500">@{creator.id}</p>
            </div>
        ) : (
            <p className="mt-4 text-sm text-amber-500 font-medium">
            Channel {handle ? `"${handle}"` : ""} could not be found.
            </p>
        )}

        <p className="mt-6 text-sm text-zinc-400 flex items-center justify-center gap-1.5">
            <span>Check for updates on</span>
            <a
            href="https://github.com/SanityGuy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-200 hover:text-[#0095B6] transition-colors inline-flex items-center gap-1"
            >
            <FaGithub size={15} />
            <span>GitHub</span>
            <ExternalLink size={12} />
            </a>
        </p>

        <Link
            to="/home"
            className="mt-6 inline-flex h-10 px-6 items-center justify-center rounded-full bg-zinc-800 text-sm font-medium text-zinc-200 hover:bg-zinc-700 hover:text-[#0095B6] transition-colors"
        >
            Go to Home
        </Link>
        </div>
    );
}

export default ChannelPage;