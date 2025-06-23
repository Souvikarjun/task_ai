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

/**
 * layouts
 */

import RootLayout  from "@/layouts/RootLayout";

/**
 * types
 */

import type { RouteObject } from "react-router";

const RootRoutChildren: RouteObject[] = [
        {
            index: true,
            element: <HomePage/>,
        }
    ]


const router = createBrowserRouter([
    {
        path: '/',
        element:<RootLayout />,
        children: RootRoutChildren,
    } 
]);

export default router