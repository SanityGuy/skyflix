import Navbar from '../../layouts/Navbar';
import Sidebar from '../../layouts/Sidebar';

import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            <div className="flex flex-1">
                <Sidebar />

                <main className="flex-1 p-6 bg-zinc-900">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}