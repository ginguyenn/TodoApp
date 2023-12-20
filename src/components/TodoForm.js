import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefaul();

        addTodo(value)

        //clear result after inserting
        setValue("")
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" 
            placeholder="What is the task today?" 
            onChange={(e) => setValue(e.target.value)}
            value = {value} /> 
            <button className="todo-btn" type="submit">Add</button>
        </form>
    )
}