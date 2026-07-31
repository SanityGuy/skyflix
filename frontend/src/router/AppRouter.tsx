import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

import HomePage from '../pages/HomePage';
import ExplorePage from '../pages/ExplorePage';
import WatchPage from '../pages/WatchPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
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
            path: '/login',
            element: <LoginPage />,
        },
        {
            path: '/register',
            element: <RegisterPage />,
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
