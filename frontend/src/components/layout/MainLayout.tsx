import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../layouts/Navbar';
import Sidebar from '../../layouts/Sidebar';

export interface MainLayoutContext {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

export default function MainLayout() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    return (
        <div className="min-h-screen flex flex-col bg-[#0f0f0f]">
            <Navbar 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
            />
            
            <div className="flex flex-1">
                <Sidebar />

                <main className="flex-1 p-6 bg-zinc-900">
                    <Outlet context={{ 
                        searchQuery, 
                        setSearchQuery, 
                        selectedCategory, 
                        setSelectedCategory 
                    } satisfies MainLayoutContext} />
                </main>
            </div>
        </div>
    );
}