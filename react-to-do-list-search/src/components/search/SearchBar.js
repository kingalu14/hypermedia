import React, { Component } from 'react'

/****ToDoInput component*******/
import TodoItem  from './components/TodoItem/TodoItem';
class SearchBar extends Component{

    constructor(props) {
        super(props);
        /****state that keep tracks input changed*******/
        this.state = {
            searchText:""
        };
        /****if there is any input bind it to our input change hanlder *******/
        this.searchInputHandler = this.searchInputHandler.bind(this);
    }
    /****function that enable to write new todo list in our input field****/
    searchInputHandler=(e)=>{
        this.setState({searchText:e.target.value})
    }
    searchHandler=(e)=>{
        this.setState({searchText:e.target.value.substring(0,50)})
        this.props.search(e.target.value)
    }
    render(){
        return(
            /****now we render our to-do input fields***/
            <div className="container">
                <input type="text"
                       value={this.state.searchText}
                       onChange={this.searchHandler.bind(this)} /> <label>Search</label>
            </div>
        );
    }
};
//we export default so you can use name of your choice during importations
export default SearchBar;