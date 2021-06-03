import React, { Component } from 'react'
import "./TodoList.css"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

class TodoList extends Component{
    constructor(props) {
        super(props)
        this.state = { tasks: [] }
        this.addTask = this.addTask.bind(this)
    }

    addTask(taskObj) {
        this.setState(curState => ({ tasks: [...curState.tasks,taskObj] }))
        console.log(this.state.tasks)
    }

    render() {
        return (
            <section className="TodoList">
                <NewTodoForm addTask={this.addTask}/>
                <Todo task="Fight for peace"/>
            </section>
        )
    }
}

export default TodoList;