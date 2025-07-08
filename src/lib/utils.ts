     



import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatRelative, isSameYear, format, isBefore, isAfter, isTomorrow, isToday, startOfToday } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toTitleCase(str: string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function formateCustomDate(date: string|number|Date){
  const today = new Date()
  const relativeDate = toTitleCase(formatRelative(date, today).split(' 0 ')[0]);

  const relativeDays = ['Today', 'Tommorrow', 'Yesterday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  if (relativeDays.includes(relativeDate)) {
    return relativeDate;
  }

  if (isSameYear(date, today)) {
    return format(date, 'dd MMM');
  }
  else {
    return format(date, 'dd MMM yyyy');
  }

}


export function getTaskDueDateColorClass(dueDate : Date | null , completed ?: boolean): string | undefined{
  if (!dueDate) return 'text-muted-foreground';
  
  const today = startOfToday();
  if (isBefore(dueDate, today)) {
    return 'text-red-500';
  } else if (isToday(dueDate)) {
    return 'text-blue-500';
  } else if (isTomorrow(dueDate)) {
    return 'text-yellow-500';
  } else if (isAfter(dueDate, today)) {
    return 'text-green-500';
  }

  return 'text-muted-foreground';
}
