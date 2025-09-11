import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import { useState } from "react";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [isDeletingTask, setIsDeletingTask] = useState(false);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9), //cria id de n e letras
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  //colocar no localStorage - atualizar tarefa
  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatingTask(true);

    await delay(1000);

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload } //payload = title e muda o state para Created
          : task
      )
    );
    setIsUpdatingTask(false);
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task))
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);

    await delay(1000);

    setTasks(tasks.filter((task) => task.id !== id)); //cria um novo array excluindo o id que foi passado
    
    setIsDeletingTask(false);
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
}
