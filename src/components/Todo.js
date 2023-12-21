import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo =({task, toggleComplete}) => {
    return(
        <div className="Todo">
            {/* hiển thị nội dung của task 
               className={${task.completed ? "completed" : "incompleted"}}:
               nếu task.completed là true thì return completed còn ko thì incompleted
               onClick={() => toggleComplete(task.id)}: khi phần tử p được click thì sẽ gọi hàm toggleComplete
               {task.task}:hiển thị nội dung của task có thuộc tính task
            */}
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                {/*icon pen and trash bin*/}
            <FontAwesomeIcon className="edit-icon" icon={faPenToSquare}/>
            <FontAwesomeIcon className="delete-icon" icon={faTrash}/>
            </div>
        </div>
    )
}