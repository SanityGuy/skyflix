import { Radio } from "lucide-react";

export default function LiveBadge() {

    return (
        <div className="gap-1 flex items-center justify-center w-15 h-6 bg-red-600 rounded border border-red-900/40 text-xs font-semibold text-red-500 shadow-lg shadow-[#0095B6]/20">
        <Radio size={20} className="text-white" />
        <span className="text-white font-bold inline">LIVE</span>
        </div>
    );
}