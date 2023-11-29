import React from "react";


const BotonLimpiar= ({eliminarTarea})=>{

    const limpiar = () =>{
        eliminarTarea()
      }

    return(
      <div className="d-flex justify-content-end" style={{marginRight:'15px'}}>
        <button onClick={limpiar} className="btn  btn-sm col-4 " style={{backgroundColor:'#F43D55 ',marginBottom:'20px',marginLeft:'18px'}}>
          
        Quitar lo hecho
      </button>
</div>
    )
}

export default BotonLimpiar;