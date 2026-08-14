import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

import HomePage from '../pages/HomePage';
import WatchPage from '../pages/WatchPage';
import ProfilePage from '../pages/ProfilePage';
import SettingsPage from '../pages/SettingsPage';
import HistoryPage from '../pages/HistoryPage';
import LiveRadarPage from '../pages/LiveRadarPage';
import ChannelPage from '../pages/ChannelPage';
import TermsOfServicePage from '../pages/TermsOfServicePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import SearchPage from '../pages/SearchPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
    // 1. Routes WITH Navbar and Sidebar
    {
        element: <MainLayout />,
        children: [
            { index: true, path: '/', element: <HomePage /> },
            { path: '/home', element: <HomePage /> },
            { path: '/watch', element: <WatchPage /> },
            { path: '/profile', element: <ProfilePage /> },
            { path: '/settings', element: <SettingsPage /> },
            { path: '/history', element: <HistoryPage /> },
            { path: '/radar', element: <LiveRadarPage /> },
            { path: '/channel/:handle/*', element: <ChannelPage /> },
            { path: '/channel', element: <ChannelPage /> },
            { path: '/results', element: <SearchPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
    { path: '/terms', element: <TermsOfServicePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}