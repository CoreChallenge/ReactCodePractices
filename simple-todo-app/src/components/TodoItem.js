import React from "react";

class TodoItem extends React.Component {

    render(){

    const { completed, id, title } = this.props.todo;

    return (
        <li>
            <input type="checkbox"
             checked={completed} 
             onChange={() => this.props.handleChangeProps(id)} /> {title}</li>);

    };
}

export default TodoItem