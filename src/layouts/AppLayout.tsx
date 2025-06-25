/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import AppSidebar from "@/components/AppSidebar"

const AppLayout = () => {
  return (
    <>
    <SidebarProvider>
        <AppSidebar/>
        <SidebarTrigger/>
        <div>AppLayout</div>
        <Outlet />
    </SidebarProvider>
    </>
  )
}

export default AppLayout