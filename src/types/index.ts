/**
 * @copyright 2024 Souvikarjun
 * @license MIT
 * @description Assets for the app
 */

type Project = {
  id: string | null;
  name: string;
  color_name: string;
  color_hex: string;
}

type ProjectForm = {
  id: string | null;
  name: string;
  color_name: string;
  color_hex: string;
  ai_task_gen: boolean;
  task_gen_prompt: string;
};

type Task = {
  id?: string;
  content: string;
  due_date: Date | null;
  completed?: boolean;
  projectId?: Project | null;
  userId?: string;
}

type TaskFormProp = {
  id?: string;
  content: string;
  due_date: Date | null;
  completed?: boolean;
  projectId?: string | null;
}

export type { Project, ProjectForm, Task, TaskFormProp }