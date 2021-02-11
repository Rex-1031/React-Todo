import React from 'react';
import './Todo.css'

const Todo = props => {
    return(
    <div
        className={`item${props.item.complete ? 'complete': ''}`}
        onClick={()=> props.toggleComplete(props.item.id)}
    >
        <p>{props.item.name}</p>
    </div>
    
    )
}


export default Todo