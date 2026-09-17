import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import TSidebar from "./TSidebar";

export default function TLayout() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 639px)");
        const updateIsMobile = () => {
            setIsMobile(mediaQuery.matches);
            if (mediaQuery.matches) setIsSidebarCollapsed(true);
        };

        updateIsMobile();
        mediaQuery.addEventListener("change", updateIsMobile);
        return () => mediaQuery.removeEventListener("change", updateIsMobile);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-white">
        <div className="flex flex-1 flex-row min-w-0">
            <TSidebar 
            isCollapsed={isSidebarCollapsed || isMobile}
            onToggleSidebar={() => {
                if (!isMobile) setIsSidebarCollapsed((prev) => !prev);
            }}
            />

            <main className="flex-1 p-6 sm:p-10 bg-zinc-950 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <Outlet />
            </div>
            </main>
        </div>
        </div>
    );
}