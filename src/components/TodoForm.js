import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";

export const TodoForm = () => {

    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefaul();
        console.log(value)
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" 
            placeholder="What is the task today?" onChange={(e) => setValue(e.target.value) }/> 
            <button className="todo-btn" type="submit">Add</button>
        </form>
    )
}