/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */

/**
 * node modules
 */

import { createBrowserRouter } from "react-router";

/**
 * pages
 */

import HomePage from "@/pages/HomePage";
import RegisterPage from "@/pages/RegisterPage";

/**
 * layouts
 */

import RootLayout  from "@/layouts/RootLayout";
import RootErrorBoundery from "@/pages/RootErrorBoundery"
import AppLayout from "@/layouts/AppLayout";

/**
 * types
 */

import type { RouteObject } from "react-router";
import LoginPage from "@/pages/LoginPage";
import AuthSyncPage from "@/pages/AuthSyncPage";


const RootRoutChildren: RouteObject[] = [
        {
            index: true,
            element: <HomePage/>,
        },
        {
            path: 'register',
            element: <RegisterPage/>
        },
        {
            path: 'login',
            element: <LoginPage/>
        },
        {
            path: 'auth-sync',
            element: <AuthSyncPage />
        }
    ]


const router = createBrowserRouter([
    {
        path: '/',
        element:<RootLayout />,
        errorElement: <RootErrorBoundery/>,
        children: RootRoutChildren,
    },
    {
        path: '/app',
        element: <AppLayout/>
    }
]);

export default router