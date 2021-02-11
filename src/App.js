import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'


  const todos =[
    {
      name: "Study For Lecture",
      id: 0,
      complete: false
    },
    {
      name: "Walk the dog",
      id: 1,
      complete: false
    },
    {
      name: "Write Report for Work",
      id: 2,
      complete: false
    },
    {
      name: "Meet for coffee with friends",
      id: 3,
      complete: false
    },
    {
      name: "Code Time",
      id: 4,
      complete: false
    },
    {
      name: "Finish React Project",
      id: 5,
      complete: false
    }
  ]


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todos: todos
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleComplete = (itemId) =>{
    const newTodo = this.state.todos.map(item =>{
      if(itemId === item.id){
        return{
          ...item,
          complete: !item.complete
        }
      }else{
        return item;
      }
    })
    this.setState({
      ...this.state,
      todos: newTodo
    })
  }

  addTodo =(itemName, e) =>{
    e.preventDefault();
    const newTodoItem ={
      id: Date.now(),
      name: itemName,
      complete: false
    }
    this.setState({
      ...this.state, 
      todos: [... this.state.todos, newTodoItem]
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleComplete={this.toggleComplete} todos={todos}/>
        <TodoForm />
        
      </div>
    );
  }
}

export default App;
