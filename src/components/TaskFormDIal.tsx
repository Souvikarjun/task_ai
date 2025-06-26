/**
 * @copyright 2024 Souvikarjun Deb
 * @license MIT
 * @description Assets for the app
 */

import type { PropsWithChildren } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import TaskForm from "@/components/TaskForm"

const TaskFormDIal: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Dialog>
        <DialogTrigger>
            {children}
        </DialogTrigger>

        <DialogContent className="p-0 border-0 !rounded-xl">
            <TaskForm/>
        </DialogContent>
    </Dialog>
  )
}

export default TaskFormDIal
