/**
 * @copyright 2024 codewithsadee
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
    } 
]);

export default router