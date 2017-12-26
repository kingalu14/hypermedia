import React, { Component } from 'react';
import Header from './components/header/Header';
import ToDoInput from './components/toDoInput/ToDoInput';
import TodoItem  from './components/TodoItem/TodoItem';
import SearchBar  from './components/search/SearchBar';
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
        this.setState((prevState,props)=>{
            return {
                toDoLists:todoLists,
                nextId:prevState.nextId+1,
            }
        });
    }

    //delete todo list in array
    removeTodo=(id)=>{
        //copy todo list in our new object
        const newTodoLists = this.state.toDoLists.filter(todo=>{
            return todo.id !== id;
        });
        this.setState({toDoLists:newTodoLists});
        //delete todo in the copy of our[...todoLists] todo list
        //update state of our original todo list with copy//

    }
    //delete todo list in array
    searchTodo=(searchText)=>{
        //copy todo list in our new object
        const newTodoLists = this.state.toDoLists.filter(todo=>{
            return todo.toDo.toLowerCase().indexOf(searchText) !== -1;
        });
        this.setState({toDoLists:newTodoLists});
        //delete todo in the copy of our[...todoLists] todo list
        //update state of our original todo list with copy//
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
                       return <TodoItem todo={todo} key={todo.id}  id={todo.id} removeTodo={this.removeTodo} />
                     })
                   }
                 </ul>

                 <SearchBar search={this.searchTodo} />
             </div>
       </div>
    );
  }
}
export default App;
