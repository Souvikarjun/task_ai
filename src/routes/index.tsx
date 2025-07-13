     


/**
 * node modules
 */

import { createBrowserRouter } from "react-router";

/**
 * pages
 */

import HomePage from "@/pages/HomePage";
import RegisterPage from "@/pages/RegisterPage";
import InboxPage from "@/pages/InboxPage";

/**
 * layouts
 */

import RootLayout  from "@/layouts/RootLayout";
import RootErrorBoundery from "@/pages/RootErrorBoundery"
import AppLayout from "@/layouts/AppLayout";

import appAction from "@/routes/actions/appActions";

/**
 * types
 */

import type { RouteObject } from "react-router";
import LoginPage from "@/pages/LoginPage";
import AuthSyncPage from "@/pages/AuthSyncPage";
import inboxTaskLoader from "./loaders/inboxLoader";


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

const AppRouterChildren: RouteObject[] = [
    {
        path: 'inbox',
        element: <InboxPage/>,
        loader: inboxTaskLoader,
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
        element: <AppLayout/>,
        children: AppRouterChildren,
        action: appAction}
]);

export default router