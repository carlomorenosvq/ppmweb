import { useForm } from "react-hook-form";
import { useTask } from "../contexto/taskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import React from "react";
function TaskFormPage() {
  const { register, handleSubmit, setValue, } = useForm();
  const { createTask, getTask, updateTask } = useTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if(params.id){
        const task = await getTask(params.id);
        console.log(task);
        setValue('title', task.title),
        setValue('description', task.description)
      }
    }
    loadTask()

  }, []);

  const onSubmit = handleSubmit((data) => {
    
    if (params.id) {
      updateTask(params.id, data);
    }else{
      createTask(data);
      
}
  navigate('/tasks')
});
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center"> 
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <h1 className="text-2xl font-bold">Añadir una tarea</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Título"
          {...register("title")}
          
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button>Guardar</button>
      </form>

      </div>
    </div>
  );
}
export default TaskFormPage;
