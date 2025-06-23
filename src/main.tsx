/**
 * @copyright 2024 codewithsadee
 * @license MIT
 * @description Assets for the app
 */

/**
 * Node Modules 
 */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

/**
 * CSS links
 */
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={}/>
  </StrictMode>,
)
