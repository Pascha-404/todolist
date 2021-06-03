import React, { Component } from 'react'
import "./TodoList.css"
import {v4 as uuid} from "uuid"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

class TodoList extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section className="TodoList">
                <NewTodoForm />
                <Todo task="Fight for peace"/>
            </section>
        )
    }
}

export default TodoList;