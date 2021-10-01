import React from 'react'
import { Todoitem } from "./Todoitem";

export const  Todos = (props) => {
    let mystyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        
        <div className="container" style={mystyle}>
            <h3 className="my-3">Todos list</h3>
            {props.todos.length===0? "No display Your Todos list" :props.todos.map((todo)=>{
                return (
                    <Todoitem todo={todo} key={todo.srno} ondelete={props.ondelete} /> 
                ) 
            })}
            
        </div>
    )
}
