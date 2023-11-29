import React from "react";
import TaskItem from "./TaskItem";
import "./list.css";


const TaskList = ({tareas, tildarTarea,mostrarTareaHecha = false, tittle})=>{


const taskItemList = (doneValor) => {
   return(
    tareas
    .filter(item => item.done === doneValor)/*Filtro por tarea hecha o no */
    .map((item) => (
      <TaskItem  item={item} key={item.name} tildarTarea={tildarTarea}/>/*Renderizo cada fila de tarea*/
    ))
  )
}

    
return(
      
      
        <table className="table table-dark  table-bordered table table-hover my-4" >
        <thead  > 
          <tr >
            <th style={{backgroundColor: '#F8D7DA', color:'black'}} >Tareas {tittle}</th>
          </tr>
        </thead>
        <tbody>
          {taskItemList(mostrarTareaHecha)}
        </tbody>
      </table>
      
    )
   
}
export default TaskList;