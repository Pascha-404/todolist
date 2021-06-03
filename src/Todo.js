import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	render() {
		return (
			<div className='Todo'>
				<p className='Todo-data'>{this.props.task}</p>
				<button className='Todo-btn'>🗑</button>
			</div>
		);
	}
}

export default Todo;
