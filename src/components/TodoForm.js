import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            todoItem: ''
        }
    }

    render(){
        return(
            <form>
                <input 
                    type='text'
                    name='todoItem'
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}







export default TodoForm