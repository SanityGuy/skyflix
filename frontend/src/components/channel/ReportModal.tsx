interface ReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    channelHandle: string;
}

export default function ReportModal({ isOpen, onClose, channelHandle }: ReportModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
        <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white">Report Channel</h3>
            <p className="text-xs text-zinc-400">
            Select an issue regarding @{channelHandle}:
            </p>
            <div className="space-y-2 text-xs text-zinc-300">
            <label className="flex items-center gap-2 p-2 rounded hover:bg-zinc-800/50 cursor-pointer">
                <input type="radio" name="report" className="accent-[#0095B6]" />
                <span>Spam or misleading content</span>
            </label>
            <label className="flex items-center gap-2 p-2 rounded hover:bg-zinc-800/50 cursor-pointer">
                <input type="radio" name="report" className="accent-[#0095B6]" />
                <span>Impersonation</span>
            </label>
            <label className="flex items-center gap-2 p-2 rounded hover:bg-zinc-800/50 cursor-pointer">
                <input type="radio" name="report" className="accent-[#0095B6]" />
                <span>Inappropriate profile content</span>
            </label>
            </div>
            <div className="flex justify-end gap-2 pt-2">
            <button
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
                Cancel
            </button>
            <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-[#0095B6] text-xs font-semibold text-white hover:bg-[#00819e] transition-colors"
            >
                Submit Report
            </button>
            </div>
        </div>
        </div>
    );
}