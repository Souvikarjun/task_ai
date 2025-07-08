/**
 * @copyright 2024 Souvikarjun Deb
 * @license MIT
 * @description Assets for the app
 */

'use client'


import { useEffect,useState,useCallback } from "react"

import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, X, Inbox, ChevronDown, Hash, SendHorizonal } from "lucide-react"
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip"
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandList, CommandItem } from "@/components/ui/command"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { ClassValue } from "clsx"
import type { TaskFormProp } from "@/types"
import { formateCustomDate, getTaskDueDateColorClass, cn } from "@/lib/utils"
import * as chrono from 'chrono-node'


type taskFormProps ={
  defaultFormData?: TaskFormProp
  className?: ClassValue
  mode: 'create' | 'edit'
  onCancle?: () => void
  onSubmit?: (formData: TaskFormProp) => void
}

const DEFAULT_FORM_DATA: TaskFormProp = {
  content: '',
  due_date: null,
  project: null,
} 

const TaskForm: React.FC<taskFormProps> = ({
  defaultFormData,
  className,
  mode,
  onCancle,
  onSubmit
}) => {

  const [ taskContent, settaskContent ] = useState(defaultFormData?.content);
  const [ duedate, setduedate] = useState(defaultFormData?.due_date);
  const [ projectId, setprojectId ] = useState(defaultFormData?.project);
  const [ projectName, setprojectName ] = useState('');
  const [ projectColorhex, setprojectColorhex ] = useState('');
  const [ dueDateOpen, setdueDateOpen ] = useState(false);
  const [ projectOpen, setprojectOpen ] = useState(false);
  const [ formData, setformData ] = useState(defaultFormData)

  useEffect(() => {
    setformData((prevFormData)=> ({

      ...prevFormData,
      content: taskContent,
      due_date: duedate,
      projectId: projectId,
    }));
  }, [taskContent, duedate, projectId]);  

  useEffect(() => {
    const chronoParsed = chrono.parse(taskContent)

    if(chronoParsed.length ) {
      const LastDate = chronoParsed[chronoParsed.length - 1]
      setduedate(LastDate.date())
    }


  }, [taskContent])

  const handleSubmit = useCallback(() => {
    if(!taskContent) return;

    console.log(formData)

    if(onSubmit) onSubmit(formData);

    settaskContent("");
  }, [taskContent, formData, onSubmit]);

  return (
    <Card className="focus-within:border-foreground/30">
        <CardContent className="p-2">
            <Textarea 
              className="!border-0 !ring-0 mb-2 p-2" 
              placeholder="After finishing project Take a tour" 
              autoFocus
              value={taskContent}
              onInput={(e) => settaskContent(e.currentTarget.value)}
            />

          <div className="ring ring-border rounded-md max-w-max">
              <Popover open = {dueDateOpen} onOpenChange={setdueDateOpen} >
                <PopoverTrigger>
                  <Button type="button" variant="ghost" size='sm' className={cn(getTaskDueDateColorClass(duedate, true))}><CalendarIcon/> {duedate ? formateCustomDate(duedate) : 'Due Date'}</Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 ">
                  <Calendar 
                    mode="single" 
                    disabled = {{before: new Date()}} 
                    initialFocus
                    onSelect={(selected) => {setduedate(selected||null); setdueDateOpen(false)}}
                  />
                </PopoverContent>
              </Popover>

              {duedate && (
                <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant='ghost' size='sm' className="px-2 -ms-2" aria-label="'Remove Due Date" onClick={() => setduedate(null)}>
                    <X/>
                  </Button>
                </TooltipTrigger>
              </Tooltip>
              )}
          </div>
        </CardContent>

        <Separator/>

        <CardFooter className="grid grid-cols-[minmax(0,1fr),max-content] gapp-2 p-2">
          <Popover modal open={projectOpen} onOpenChange={setprojectOpen}>
            <PopoverTrigger asChild>
              <Button variant='ghost' role="combobox" aria-expanded={projectOpen} className="max-w-max "><Inbox/> Inbox <ChevronDown/></Button>
            </PopoverTrigger>

            <PopoverContent className="w-[240px] p-0" align="start">
              <Command>
                <CommandInput placeholder="Search Project..."/>
                <CommandList>
                  <ScrollArea>
                    <CommandEmpty>No Project Found</CommandEmpty>
                    <CommandGroup>
                      <CommandItem>
                        <Hash/> Project 1
                      </CommandItem>
                      <CommandItem>
                        <Hash/> Project 2
                      </CommandItem>
                      <CommandItem>
                        <Hash/> Project 3
                      </CommandItem>
                      <CommandItem>
                        <Hash/> Project 4
                      </CommandItem>
                    </CommandGroup>
                  </ScrollArea>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <div className="flex items-center gap-2">
            <Button variant='secondary' onClick={onCancle}>
              <span className="max-md:hidden">Cancle</span>
              <X className="md:hidden"/>
            </Button>
            
            <Button disabled={!taskContent} type="submit" onClick={handleSubmit}>
              <span className="max-md:hidden">{mode == 'create' ? 'Add Task' : "Save"}</span>
              <SendHorizonal className="md:hidden"/>
            </Button>
          </div>
        </CardFooter>
    </Card>
  )
}

export default TaskForm