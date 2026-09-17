import { useState } from "react";
import { X, AlertCircle } from "lucide-react";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  channelHandle: string;
}

export default function ReportModal({ isOpen, onClose, channelHandle }: ReportModalProps) {
  const [selectedReason, setSelectedReason] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-5 shadow-2xl relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-[#0095B6]" />
            <h3 className="text-base sm:text-lg font-bold text-white">Report Channel</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs text-zinc-400">
          Select an issue regarding <span className="text-[#0095B6] font-mono font-semibold">@{channelHandle}</span>:
        </p>

        <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
          {[
            "Spam or misleading content",
            "Impersonation",
            "Inappropriate profile content",
            "Harassment or bullying",
          ].map((reason) => (
            <label
              key={reason}
              className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                selectedReason === reason
                  ? "border-[#0095B6] bg-[#0095B6]/10 text-white"
                  : "border-zinc-800/80 bg-zinc-950/40 text-zinc-300 hover:bg-zinc-800/50"
              }`}
            >
              <input
                type="radio"
                name="report"
                value={reason}
                checked={selectedReason === reason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="h-4 w-4 accent-[#0095B6] cursor-pointer"
              />
              <span className="font-medium text-xs sm:text-sm">{reason}</span>
            </label>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            disabled={!selectedReason}
            className="px-5 py-2 rounded-full bg-[#0095B6] text-xs font-semibold text-white transition-all duration-200 hover:bg-[#00819e] hover:shadow-[0_0_15px_rgba(0,149,182,0.4)] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
          >
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
}