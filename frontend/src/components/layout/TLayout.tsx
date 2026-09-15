import { useState } from "react";
import { Outlet } from "react-router-dom";
import TSidebar from "./TSidebar";

export default function TLayout() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-white">
        <div className="flex flex-1 flex-row min-w-0">
            <TSidebar 
            isCollapsed={isSidebarCollapsed} 
            onToggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
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