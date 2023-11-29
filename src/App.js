import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ShowList from "./components/ShowList";
import BotonLimpiar from "./components/BotonLimpiar";

function App() {
  const [itemDeTarea, setItemDeTarea] = useState([]);
  /*Un array vacío usamos las siguientes propiedades para probar el código
      { name: 'probando array', done: false },
      { name: 'lalala', done: false },*/
  const [mostrarTareaHecha, setMostrarTareaHecha] = useState(false);

  function nuevaTarea(tarea) {
    if (!itemDeTarea.find((item) => item.name === tarea)) {
      setItemDeTarea([...itemDeTarea, { name: tarea, done: false }]);
      alert("Has agregado una nueva tarea");
    } else {
      alert("Coloca un nombre dististo de tarea");
    }
  }

  const tildarTarea = (tarea) => {
    setItemDeTarea(
      itemDeTarea.map((item) =>
        item.name === tarea.name ? { ...item, done: !item.done } : item
      )
    );
  };

  

  /*el siguiente hook es para cuando apenas cargue la aplicación por eso[variable vacía] inicialmente ejecute código que lee en el localstorage la variable tareas, lo cual se guardará en la variable datos, si tiene algo ese localstorage lo vamos a convertir en su formato javascript y se lo asignamos al la funcion que cambia el estado de itemDeTarea.Eliminamos el react strict mode de  index.js para que no recargue todo y este hook vuelva a leer un array vacío*/
  useEffect(() => {
    let datos = localStorage.getItem("tareas");
    if (datos) {
      setItemDeTarea(JSON.parse(datos));
    }
  }, []);

  const eliminarTarea = () => {
    setItemDeTarea(itemDeTarea.filter((item) => !item.done));
    setMostrarTareaHecha(false);
  };

  /*al valor de itemDetarea lo convierto en string json xq esta en formato js y necesito guardarlo en el localstorage */
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(itemDeTarea));
  }, [itemDeTarea]);

  return (
    <div className="bg-dark vh-100 text-white">
      <div className="container col-md-4 ">
      <h1 style={{color: '#FDBCE2',  paddingTop:'25px'}} className="d-flex justify-content-center" >To do list App</h1>

        <TaskForm nuevaTarea={nuevaTarea} /> {/* Crea una tarea */}
        <TaskList tareas={itemDeTarea} tildarTarea={tildarTarea} tittle={'Pendientes'} />
        <ShowList
          isChecked={mostrarTareaHecha}
          setMostrarTareaHecha={(checked) => setMostrarTareaHecha(checked)}
          eliminarTarea={eliminarTarea}
        />
        {/*Muestra las tareas en lista*/}
        {mostrarTareaHecha === true ? (
          <>
          <TaskList
            tareas={itemDeTarea}
            tildarTarea={tildarTarea}
            mostrarTareaHecha={mostrarTareaHecha}
            tittle={'Realizadas'}
          />
         <BotonLimpiar eliminarTarea={eliminarTarea}/>
      </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
