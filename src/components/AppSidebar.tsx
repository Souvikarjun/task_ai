/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */

import { Sidebar, SidebarHeader, SidebarFooter, SidebarContent } from "@/components/ui/sidebar";
// import { Link } from "react-router";
// import Logo from '@/components/Logo'
import { UserButton } from "@clerk/clerk-react";


const AppSidebar = () => {
  return (
    <Sidebar>
        <SidebarHeader></SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter>
            <UserButton showName appearance={{
                elements:{
                    rootBox: 'w-full',
                    userButtonTrigger: '!shadow-none w-full'
                }
            }}/>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar