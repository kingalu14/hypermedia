import React, { Component } from 'react'
import './ToDoInput.css';
/****ToDoInput component*******/
class ToDoInput extends Component{

    constructor(props) {
        super(props);
        /****state that keep tracks input changed*******/
        this.state = {newTod:""};
        /****if there is any input bind it to our input change hanlder *******/
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    /****function that enable to write new todo list in our input field****/
    inputChangedHandler=(e)=>{
        this.setState({newTod:e.target.value})
    }
    /****function that add our new to-do in our array****/
    addTodo=(todo)=>{
        /***check if todo isn't empty****/
        if(todo.length > 0){
            this.props.addTodo(todo);
            this.setState({newTod:''})
        }

    }
    render(){
     return(
         /****now we render our to-do input fields***/
        <div className="container">
            <input type="text" value={this.state.newTod} onChange={this.inputChangedHandler}/>
            <button onClick={()=>this.addTodo(this.state.newTod)}>Add Todo </button>
        </div>
     );
    }
};
//we export default so you can use name of your choice during importations
export default ToDoInput;