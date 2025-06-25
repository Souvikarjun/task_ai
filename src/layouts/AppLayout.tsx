/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import AppSidebar from "@/components/AppSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"


const AppLayout = () => {
  return (
    <>
    <SidebarProvider>
      <TooltipProvider disableHoverableContent delayDuration={300}>
        <AppSidebar/>
        <SidebarTrigger/>
        <div>AppLayout</div>
        <Outlet />
      </TooltipProvider>
    </SidebarProvider>
    </>
  )
}

export default AppLayout