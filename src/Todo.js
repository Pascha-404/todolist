import React, { Component } from 'react';
import './Todo.css';
import deleteImg from './img/delete.png';
import editImg from './img/edit.png';

class Todo extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(evt) {
		this.props.deleteTask(this.props.id)
	}

	render() {
		return (
			<div className='Todo'>
				<p className='Todo-data'>{this.props.task}</p>
				<button className='Todo-btn' onClick={this.handleClick}>
					<img src={deleteImg} alt='' />
				</button>
			</div>
		);
	}
}

export default Todo;
