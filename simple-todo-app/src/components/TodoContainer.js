import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";

class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Development website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    handleChange = (id) => {
        console.log("clicked", id);
    };

    render(){
        return(
            <div>
                <Header />
                <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} />
            </div>
        );
    }
}

export default TodoContainer