import { Button } from "./ui/button"
import { CirclePlus } from "lucide-react"

type TaskCreateButtonprops = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

const TaskCreateButton: React.FC<TaskCreateButtonprops> = (props) => {
  return (
    <Button variant='link' className="w-full justify-center mb-4 px-0" {...props}>
        <CirclePlus/> Add Task
    </Button>
  )
}

export default TaskCreateButton