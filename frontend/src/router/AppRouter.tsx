import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

import HomePage from '../pages/HomePage';
import ExplorePage from '../pages/ExplorePage';
import WatchPage from '../pages/WatchPage';
import ProfilePage from '../pages/ProfilePage';
import SettingsPage from '../pages/SettingsPage';
import FavoritesPage from '../pages/FavoritesPage';
import HistoryPage from '../pages/HistoryPage';
import LiveRadarPage from '../pages/LiveRadarPage';
import ChannelPage from '../pages/ChannelPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import SearchPage from '../pages/SearchPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([{
    element: <MainLayout />,
    children: [
        {
            index: true,
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/home',
            element: <HomePage />,
        },
        {
            path: '/explore',
            element: <ExplorePage />,
        },
        {
            path: '/watch/:id',
            element: <WatchPage />,
        },
        {
            path: '/profile',
            element: <ProfilePage />,
        },
        {
            path: '/settings',
            element: <SettingsPage />,
        },
        {
            path: '/profile/favorites',
            element: <FavoritesPage />,
        },
        {
            path: '/history',
            element: <HistoryPage />,
        },
        {
            path: '/radar',
            element: <LiveRadarPage />,
        },
        {
            path: '/channel/:handle',
            element: <ChannelPage />,
        },
        {
            path: '/channel',
            element: <ChannelPage />,
        },
        {
            path: '/login',
            element: <LoginPage />,
        },
        {
            path: '/register',
            element: <RegisterPage />,
        },
        {
            path: '/results',
            element: <SearchPage />,
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
    ],
}]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
