import React, { useState } from "react";
import Task from "./task";

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas
  const [newTask, setNewTask] = useState(""); // Estado para el valor del input

  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Función para agregar una nueva tarea
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      // Si el input no está vacío
      setTasks([...tasks, newTask]); // Agrega la nueva tarea al estado
      setNewTask(""); // Limpia el input después de agregar la tarea
    }
  };

  return (
    <>
      {/* title */}
      <div className="flex mt-12 items-center gap-4">
        <i className="text-2xl bg-blue-600 text-white p-2 rounded-sm ml-8 bx bx-calendar-check"></i>
        <h3 className="text-2xl font-semibold text-slate-700">
          Add a new Task
        </h3>
      </div>

      {/* input */}
      <div className="ml-8 mt-10 mb-8">
        <input
          id="task"
          className="w-[70%] xl:w-[40%] border-b border-gray-500 p-2 focus:outline-none"
          type="text"
          placeholder="Write your new Task"
          value={newTask}
          onChange={handleInputChange} // Actualiza el valor del input
        />
        <button
          onClick={handleAddTask}
          id="send"
          className="bg-green-500 hover:bg-green-600 py-[9px] px-4"
        >
          <i className="font-semibold text-white bx bx-check"></i>
        </button>
      </div>

      {/* Lista de tareas */}
      <div>
        {tasks.map((task, index) => (
          <Task key={index} msj={task} /> // Renderiza cada tarea
        ))}
      </div>
    </>
  );
};

export default TodoList;
