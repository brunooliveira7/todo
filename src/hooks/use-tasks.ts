import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []); //retorna o model(id...)
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true); //começa com true

  //estado intermediário para simular tempo de resposta
  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);//espera ele 2s
      setIsLoadingTasks(false); //muda o estado para false e cancela
    }
    setTasks(tasksData);//atualiza o estado de fato para retornar no componente
  }

  //faz o carregamento toda vez que atualiza o tasksData - uma única vez
  useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
