import React from "react";

const TaskItem = ({item, tildarTarea}) => {

    return(
        <tr>
              <td className="d-flex justify-content-between">
                {item.name}
                <input type="checkbox" checked={item.done} onChange={()=>{tildarTarea(item)}}/>              
              </td>
              
            </tr>
    )
}


export default TaskItem;