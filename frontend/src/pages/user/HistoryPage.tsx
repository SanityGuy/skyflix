import { useParams, Link } from "react-router-dom";
import { Radio } from "lucide-react";
import { getChannelByHandle } from "../../services/channelServices";

function HistoryPage() {
    const { handle = "" } = useParams<{ handle: string }>();
    const channelData = getChannelByHandle(handle);

    if (!channelData) {
        return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center text-zinc-300">
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0095B6]/10 border border-[#0095B6]/30">
            <Radio className="h-10 w-10 animate-pulse text-[#0095B6]" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white">Channel Not Found</h1>
            <p className="mt-2 text-sm text-zinc-400 max-w-md">
            The channel <span className="font-mono text-[#0095B6]">"{handle}"</span> doesn't exist or may have been moved.
            </p>
            <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0095B6] px-6 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-[#00819e] hover:shadow-[0_0_20px_rgba(0,149,182,0.4)] active:scale-95"
            >
            Return Home
            </Link>
        </div>
        );
    }

    const { creator } = channelData;

    return (
        <>
        <div className="min-h-screen w-full flex flex-col p-6 md:p-10 relative overflow-x-hidden">
            <div className="flex flex-col gap-2 mb-10 max-w-4xl">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    History
                </h1>
                <p className="text-sm font-medium text-zinc-400">
                    View your watch history and view your watch history.<br />
                    
                    Current Channel:
                    <span className="text-xs font-extrabold text-zinc-400 ml-1">{creator.displayName}</span>
                </p>
            </div>
        </div>
        </>
    )
}

export default HistoryPage;