import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "./ui/card";
import type { Models} from "appwrite"
import { CalendarDays, Check, Edit, Hash, Inbox, Trash2 } from "lucide-react";
import { formateCustomDate, getTaskDueDateColorClass} from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import TaskForm from "./TaskForm";

type TaskCardProps = {
  id: string;
  content: string;
  completed: boolean;
  dueDate: Date;
  project: Models.Document | null;
}

const TaskCard: React.FC<TaskCardProps> = ({id, content, completed, dueDate,project}) => {
  return (
    <>
      <div className="group/card relative grid grid-col-[max-content, minmax(0,1fr)] gap-3 border-b">
        <Button variant='outline' size='icon' className={cn("group/button rounded-full w-5 h-5 mt-2",completed && 'bg-border')} role="checkbox" aria-checked={completed} aria-label={`Mark task as ${completed? "incompleted" : "completed"}`} aria-description="task-content">
          <Check strokeWidth={4} className={cn("!w-3 !h-3 text-muted-foreground group-hover/button:opacity-100 transition-opacity", completed?"opacity-100":"opacity-0")}/>
        </Button>

        <Card className="rounded-none py-2 space-y-1.5 border-none">
          <CardContent className="p-0">
            <p id='task-content' className={cn('text-sm max-md:me-16', completed && 'text-muted-foreground line-through')}>{content}</p>
          </CardContent>
          <CardFooter className="p-0 flex gap-4">
            {dueDate && (
              <div className={cn("flex items-center gap-1 text-xs text-muted-foreground", getTaskDueDateColorClass(dueDate, completed))}>
                <CalendarDays/>
                {formateCustomDate(dueDate)}
              </div>
            )}
            <div className="grid grid-cols-[minmax(0,100pc),max-content] items-center gap-1 text-xs text-muted-foreground ms-auto">
              <div className="truncate text-right">
                {project?.name ||'inbox'}
              </div>
              {project? <Hash size={14}/> : <Inbox size={14} className="text-muted-foreground"/> }
            </div>
          </CardFooter>
        </Card>
        
        <div className="absolute top-1.5 right-0 bg-background ps-1 shadow-[-10px_0_5px_hsl(var(--background))] flex items-center gap-1 opacity-0 group-hover/card:opacity-100 max-md:opacity-100">
          {!completed && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='ghost' size='icon' className="w-6 h-6 text-muted-foreground" aria-label="Edit task">
                  <Edit />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Edit Task
              </TooltipContent>
            </Tooltip>
          )}
          <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='ghost' size='icon' className="w-6 h-6 text-muted-foreground" aria-label="Delete task">
                  <Trash2 />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Delete Task
              </TooltipContent>
            </Tooltip>
        </div>
      </div>

      <TaskForm defaultFormData={{id,content,due_date:dueDate,projectId:project && project?.$id}} mode='save'/>
    </>

  )
}

export default TaskCard