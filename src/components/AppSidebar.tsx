/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */

import { Sidebar, SidebarHeader, SidebarFooter, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuBadge, SidebarGroupLabel, SidebarGroupAction } from "@/components/ui/sidebar";
import { Link } from "react-router";
import Logo from '@/components/Logo'
import { UserButton } from "@clerk/clerk-react";
import { CirclePlus, Plus, ChevronRight } from "lucide-react";
import { SIDEBAR_LINKS } from "@/constants";
import { Collapsible } from "./ui/collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { TooltipTrigger, Tooltip, TooltipContent } from "@/components/ui/tooltip";
import TaskFormDIal from "@/components/TaskFormDIal";


const AppSidebar = () => {
  return (
    <Sidebar>
        <SidebarHeader >
          <Link to="/app/inbox" className="p-2"><Logo/></Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <TaskFormDIal>
                    <SidebarMenuButton className="!text-primary">
                      <CirclePlus /> Add Item
                    </SidebarMenuButton>
                  </TaskFormDIal>
                </SidebarMenuItem>

                {SIDEBAR_LINKS.map((items, index) =>(
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link to={items.href}>
                        <items.icon/>

                        <span>{items.label}</span>
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>0</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup >
              <SidebarGroupLabel asChild className="text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <CollapsibleTrigger >
                  <ChevronRight className="me-2 transition-transform group-data-[state=open]/collapsible:rotate-90"/>  Projects
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarGroupAction aria-lable='Add Project'>
                      <Plus />
                  </SidebarGroupAction>
                </TooltipTrigger>
                  <TooltipContent>Add Project</TooltipContent>  
              </Tooltip>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <p className="text-muted-foreground text-sm p-2"> Click + to add Project</p>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>

            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
        <SidebarFooter>
            <UserButton showName appearance={{
                elements:{
                    rootBox: 'w-full',
                    userButtonTrigger: '!shadow-none w-full justify-start hover:bg-sidebar-accent p-2 rounded-md',
                    userButtonBox: 'flex-row-reverse shadow-none gap-2',
                    userButtonOuterIdentifier: 'ps-0',
                    popoverBox: 'pointer-events-auto'
                }
            }}/>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar