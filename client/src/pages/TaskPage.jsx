import React, { useEffect } from "react";
import { useTask } from "../contexto/taskContext";
import { updateTasks } from "../../../src/controllers/tasks.controller";
import {  Link } from "react-router-dom";


//Obtiene las funciones de las tareas
function TaskPage() {
  const { getTasks, tasks, deleteTask}  = useTask();



  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  //se muestran las tareas y los botones de editar y borrar
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tasks.map((task) => (
        <div
        
          key={task._id}
          style={{
            backgroundColor: "#ff7200",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px",
            width: "200px",
          }}
        >
          <h3>Título: {task.title}</h3>
          <p>Descripción: {task.description}</p>
          <button onClick={() => deleteTask(task._id)}>
            Borrar
            </button>
            <Link to={`/tasks/${task._id}`}>  Editar</Link>
          
        </div>
      ))}
    </div>
  );
}

export default TaskPage;
