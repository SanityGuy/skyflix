import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import TLayout from '../components/layout/TLayout';

import HomePage from '../pages/feed/HomePage';
import WatchPage from '../pages/media/WatchPage';
import ProfilePage from '../pages/user/ProfilePage';
import SettingsPage from '../pages/setting/SettingsPage';
import HistoryPage from '../pages/user/HistoryPage';
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
            { path: '/profile', element: <ProfilePage /> },
            { path: '/settings', element: <SettingsPage /> },
            { path: '/history', element: <HistoryPage /> },
            { path: '/radar', element: <LiveRadarPage /> },
            { path: '/channel/:handle/*', element: <ChannelPage /> },
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