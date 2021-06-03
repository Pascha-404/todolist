import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    render() {
        return (
            <div className="Todo">
                <p>{this.props.task}</p>
                <button>Remove</button>
            </div>
        )
    }
}

export default Todo;