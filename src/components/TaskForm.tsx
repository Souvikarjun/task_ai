/**
 * @copyright 2024 Souvikarjun Deb
 * @license MIT
 * @description Assets for the app
 */

import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, X } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandList, CommandItem } from "@/components/ui/command"
import { ScrollArea } from "@/components/ui/scroll-area"


const TaskForm = () => {
  return (
    <Card className="focus-within:border-foreground/30">
        <CardContent className="p-2">
            <Textarea className="!border-0 !ring-0 mb-2 p-2" placeholder="After finishing project Take a tour" autoFocus/>

          <div className="">
              <Popover>
                <PopoverTrigger>
                  <Button type="button" variant="ghost" size='sm'><CalendarIcon/> Due Date</Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 ">
                  <Calendar mode="single" disabled = {{before: new Date()}} initialFocus/>
                </PopoverContent>
              </Popover>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant='ghost' size='sm' className="px-2 -ms-2" aria-label="'Remove Due Date">
                    <X/>
                  </Button>
                </TooltipTrigger>
              </Tooltip>
          </div>
        </CardContent>
    </Card>
  )
}

export default TaskForm