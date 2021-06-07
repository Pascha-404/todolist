import React, { Component } from 'react';
import './NewTodoForm.css';
import { v4 as uuid } from 'uuid';
import addImg from './img/add.png';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { newTask: '', isDone: false };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();

		const newTask = { ...this.state, id: uuid() };
		this.props.addTask(newTask);
		this.setState({ newTask: '' });
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='NewTodoForm'>
				<input
					type='text'
					id='newTask'
					name='newTask'
					placeholder='Enter your task'
					onChange={this.handleChange}
					value={this.state.newTask}
				/>
				<button className='NewTodoForm-btn'>
					<img src={addImg} alt='add' />
				</button>
			</form>
		);
	}
}

export default NewTodoForm;
