import React, { Component } from 'react';
import Header from './components/header/Header';
import ToDoInput from './components/toDoInput/ToDoInput';
import TodoItem  from './components/TodoItem/TodoItem';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        //todo list sample
        this.state = {
            toDoLists:[
                {id:1,toDo:"Going to pick some packages from ptt."},
                {id:2,toDo:"Reading my new book"},
                {id:3,toDo:"Learning new things about programming."},
            ],
            nextId:4
        }
    }
    //add new to do list in array
    addTodo =(todoText)=>{
        //copy todo list in our new object
        let todoLists = [...this.state.toDoLists];
        //change the copy of our todo list
        todoLists.push({id:this.state.nextId,toDo:todoText});
        //update state of our original todo list with copy
        this.setState({
            toDoLists:todoLists,
            nextId:++this.state.nextId,
        });


    }
    //delete todo list in array
    removeTodo = (id)=>{
        //copy todo list in our new object
        const todoLists = [...this.state.toDoLists];
        //delete todo in the copy of our todo list
        todoLists.splice(id,1);
        //update state of our original todo list with copy
        this.setState({toDoLists:todoLists});
    }

  render() {
    return (
        <div className="App">
             <div className="todo-wrapper">
                 {/****header component*******/}
                 <Header />
                 {/* ToDo Input component */}
                 <ToDoInput todoText="" addTodo={this.addTodo} />
                 <ul>
                   {
                     this.state.toDoLists.map((todo)=>{
                     {/****ToDo Item component*****/}
                       return <TodoItem todo={todo} key={todo.id}  id={todo.id} removeTodo={this.removeTodo} />
                     })
                   }
                 </ul>
             </div>
       </div>
    );
  }
}

export default App;
