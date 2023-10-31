import axios from "./axios";

//Métodos con rutas para las tareas
//(la página que más problemas me ha dado siempre) todo el rato era /api/verify ERROR :()

export const getTasksRequest = () => axios.get("/tasks");

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);

export const createTasksRequest = (task) => axios.post("/tasks", task);

export const updateTasksRequest = (id, task) =>
  axios.put(`/tasks/${id}`, task);


export const deleteTasksRequest = (id) => axios.delete(`/tasks/${id}`);



