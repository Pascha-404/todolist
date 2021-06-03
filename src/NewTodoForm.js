import React, { Component } from 'react'
import "./NewTodoForm.css"

class NewTodoForm extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <form className="NewTodoForm">
                <input type="text" id="task" name="task" placeholder="Enter your task" />
                <button>Add Task</button>
            </form>
        )
    }
}

export default NewTodoForm;