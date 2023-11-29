import React, { useState } from "react";

const TaskForm = ({ nuevaTarea }) => {
  const [nombreTarea, setNombreTarea] = useState(""); //determinamos una variable y una función que guardará valor en ella

  const manejadorEnvio = (e) => {
    e.preventDefault(); //Evitamos el envío por defecto de lo tipeado
    nuevaTarea(nombreTarea);
    //localStorage.setItem("tareas", nombreTarea); Reconoce la API localstorage del navegador porque la app React tambien se ejecuta en el navegador
    setNombreTarea("");
  };
  return (
    <form onSubmit={manejadorEnvio} className="my-4 row " style={{paddingLeft:'18px'}}>
      <div className="col-9 d-flex justify-content-around">
      <input
        onChange={(e) => setNombreTarea(e.target.value)}
        type="text"
        placeholder="Ingresa una nueva tarea"
        value={nombreTarea}
        className="form-control"
      />
      </div>
      <div className="col-3">
      <button className={"btn  btn-sm"} style={{backgroundColor:'#90EE90'} }>Agregar</button>
      </div>
    </form>
  );
};

export default TaskForm;
