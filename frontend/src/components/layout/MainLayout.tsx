import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import CategoryBar from "../category/CategoryBar";

export interface MainLayoutContext {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function MainLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const location = useLocation();
  const showCategories = ['/', '/home', '/explore', '/results'].includes(location.pathname);

  const handleToggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsMobileSidebarOpen((prev) => !prev);
    } else {
      setIsSidebarCollapsed((prev) => !prev);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f]">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onToggleSidebar={handleToggleSidebar}
      />

      <div className="flex flex-1">
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col min-w-0">
          {showCategories && (
            <div className="sticky top-14 z-40 border-b border-zinc-800/80 bg-[#0f0f0f]/95 backdrop-blur-md">
              <CategoryBar
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
          )}

          <main className="flex-1 p-3 sm:p-6 bg-zinc-900 overflow-y-auto pb-16 md:pb-6">
            <Outlet
              context={{
                searchQuery,
                setSearchQuery,
                selectedCategory,
                setSelectedCategory,
              } satisfies MainLayoutContext}
            />
          </main>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}