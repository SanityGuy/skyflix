import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import TLayout from '../components/layout/TLayout';

import HomePage from '../pages/feed/HomePage';
import WatchPage from '../pages/media/WatchPage';
import LikedVideosPage from '../pages/user/LikedVideosPage';
import SettingsPage from '../pages/setting/SettingsPage';
import HistoryPage from '../pages/user/HistoryPage';
import DownloadPage from '../pages/user/DownloadPage';
import LiveRadarPage from '../pages/feed/LiveRadarPage';
import ChannelPage from '../pages/user/ChannelPage';
import TermsOfServicePage from '../pages/static/TermsOfServicePage';
import PrivacyPolicyPage from '../pages/static/PrivacyPolicy';
import CommunityGuidelinesPage from '../pages/static/CommunityGuidelines';
import DMCAACopyrightPage from '../pages/static/DMCAACopyRight';
import ForgotPage from '../pages/auth/ForgetPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import SearchPage from '../pages/feed/SearchPage';
import NotFoundPage from '../pages/static/NotFoundPage';

const router = createBrowserRouter(
    [
    {
        element: <MainLayout />,
        children: [
            { index: true, path: '/', element: <HomePage /> },
            { path: '/home', element: <HomePage /> },
            { path: '/watch', element: <WatchPage /> },
            { path: '/settings', element: <SettingsPage /> },
            { path: '/radar', element: <LiveRadarPage /> },
            { path: '/channel/:handle/*', element: <ChannelPage /> },
            { path: '/channel/:handle/history', element: <HistoryPage /> },
            { path: '/channel/:handle/downloads', element: <DownloadPage /> },
            { path: '/channel/:handle/likedvideos', element: <LikedVideosPage /> },
            { path: '/channel', element: <ChannelPage /> },
            { path: '/results', element: <SearchPage /> },
        ],
    },

    {
        path: '/t',
        element: <TLayout />,
        children: [
            { index: true, element: <Navigate to="/t/terms" replace /> },
            { path: 'terms', element: <TermsOfServicePage /> },
            { path: 'privacy', element: <PrivacyPolicyPage /> }, 
            { path: 'guidelines', element: <CommunityGuidelinesPage /> },
            { path: 'copyright', element: <DMCAACopyrightPage /> },
        ],
    },

    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/forgot', element: <ForgotPage /> },
    { path: '*', element: <NotFoundPage /> },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}