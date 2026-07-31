import Navbar from '../../layouts/Navbar';
import Sidebar from '../../layouts/Sidebar';
import Footer from '../../layouts/Footer';

import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            <div className="flex flex-1">
                <Sidebar />

                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    )
}