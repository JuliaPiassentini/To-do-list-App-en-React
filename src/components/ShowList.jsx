import React from "react";

const ShowList = ({isChecked,setMostrarTareaHecha, }) => {



  return (
    <div className=" col-11row d-flex justify-content-between  text-white text-center p-2 border-secondary" >
      <div>
      <input
      checked={isChecked}
        type="checkbox"
        onChange={(e) => {setMostrarTareaHecha(e.target.checked)}}
      />{" "}
      <label>Mostrar tareas realizadas</label>
      </div>
      
    </div>
  );
};

export default ShowList;
