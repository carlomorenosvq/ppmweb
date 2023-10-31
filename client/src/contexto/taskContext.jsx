import { createContext, useContext, useState } from "react";
import { createTasksRequest, getTasksRequest, deleteTasksRequest, getTaskRequest, updateTasksRequest } from "../api/tasks";

const TaskContext = createContext();


//Funciones necesarias para las tareas, obtener, crear editar y borrar
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
        console.log(error);
    }
  };

  const createTask = async (task) => {
    const res = await createTasksRequest(task);
    console.log(res);
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTasksRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
     console.log(res);
    } catch (error) {
      return res.status(404).json({message: "Tarea no encontrada"});
    }

  };

  const updateTask = async (id, task) => {
    try {
      await updateTasksRequest(id, task);
    } catch (error) {
      console.log(error);
      
    }
  };



  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
