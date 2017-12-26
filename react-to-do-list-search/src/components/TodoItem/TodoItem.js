import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component{

    /****function that communicate with our App.js as {container} and trigger removeTodo functions once delete button pressed****/
    removeTodo(id){
        this.props.removeTodo(id);
    }
    render(){
        return(
            /****now we render our todo list and delete button****/
            <div className="todoContainer">
                {this.props.todo.toDo} <button className="removeTodo" onClick={(e)=>this.removeTodo(this.props.id)}>Remove</button>
            </div>
        );
    }
};
//we export default so you can use name of your choice during importations
export default TodoItem;