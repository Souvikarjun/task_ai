/**
 * @copyright 2024 Souvikarjun Deb
 * @license MIT
 * @description Assets for the app
 */

import { useEffect, useState, type PropsWithChildren } from "react"
import { useLocation, useFetcher } from "react-router"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import TaskForm from "@/components/TaskForm"
import { startOfToday } from "date-fns"

const TaskFormDIal: React.FC<PropsWithChildren> = ({children}) => {

  const location = useLocation()
  const fetcher = useFetcher()

  const [open, setOpen] =  useState(false)

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if(event.key == 'q') {
        const target = event.target as HTMLElement;
        if(target.localName == 'textarea') return;

        event.preventDefault();
        setOpen(true)
    }

  }
    document.addEventListener('keydown', listener)

    return () => document.removeEventListener('keydown', listener);


    }, [] )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>

        <DialogContent className="p-0 border-0 !rounded-xl">
            <TaskForm defaultFormData={{content:"", due_date: location.pathname == '/app/today' ? startOfToday() : null, projectId: null,}} mode="create" onCancle={() => setOpen(false)} onSubmit={(formData) => {
              fetcher.submit(JSON.stringify(formData), {
                action: '/app',
                method: 'POST',
                encType: 'application/json',
              });
              setOpen(false);
            }}/>
        </DialogContent>
    </Dialog>
  )
}

export default TaskFormDIal
