import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { SidebarTrigger } from "./ui/sidebar"
import Kbd from "./Kbd"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type topbarProps = {
  title : string;
  taskCount?: number
}


const TopBar: React.FC<topbarProps> = ({title, taskCount}) => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const listener = ()=> setShowTitle(window.scrollY >70);

    listener()

    window.addEventListener('scroll', listener)
    
    return () => window.removeEventListener('scroll', listener)
  }, [])

  return (
    <div className={cn("sticky z-40 bg-background top-0 h-14 grid grid-cols-[40px,minmax(0,1fr),40px] items-center px-4",showTitle && 'border-b')}>
      <Tooltip>
          <TooltipTrigger asChild>
              <SidebarTrigger />
          </TooltipTrigger>

          <TooltipContent className="flex items-center">
              <p>Open Sidebar</p>

              <Kbd kbdList={['Ctrl','B']} />
          </TooltipContent>
      </Tooltip>
      <div className={cn("max-w-[480px] mx-auto text-center transition-[transform,opacity]", showTitle ? 'translate-y-0 opacity-1000': 'translate-y-5 opacity-0')}>
        <h1 className="font-semibold truncate">{title} </h1>
        {Boolean(taskCount) && (
          <div className="text-xs text-muted-foreground">{taskCount} </div> 
        )}
      </div>
    </div>
  )
}

export default TopBar