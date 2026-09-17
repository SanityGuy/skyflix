import React from "react";

interface TooltipButtonProps {
    onClick: () => void;
    title: string;
    shortcut?: string;
    active?: boolean;
    className?: string;
    children: React.ReactNode;
}

export default function TooltipButton({
    onClick,
    title,
    shortcut,
    active,
    className = "",
    children,
}: TooltipButtonProps) {
    return (
        <div className="group/btn relative flex items-center justify-center">
        <button
            onClick={onClick}
            className={`p-1.5 transition-all duration-200 rounded-lg hover:bg-white/5 hover:text-[#0095B6] active:scale-95 ${
            active ? "text-[#0095B6]" : "text-zinc-300"
            } ${className}`}
        >
            {children}
        </button>

        <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/btn:opacity-100 transition-all duration-200 pointer-events-none z-40 whitespace-nowrap rounded bg-zinc-900/95 border border-zinc-700/60 px-2 py-1 text-[10px] font-medium text-zinc-200 shadow-xl backdrop-blur-md translate-y-1 group-hover/btn:translate-y-0">
            <span>{title}</span>
            {shortcut && <span className="ml-1 text-[#0095B6]">({shortcut})</span>}
        </div>
        </div>
    );
}