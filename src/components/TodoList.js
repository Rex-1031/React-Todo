import React from 'react';
import Todo from './Todo';

const Todolist = props =>{

    return (
        <div>
            {props.todos.map(item =>(
                <Todo toggleComplete ={props.toggleComplete} key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Todolist