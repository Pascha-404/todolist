import React, { Component } from 'react';
import './NewTodoForm.css';
import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '', isDone: false };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const newTask = { ...this.state, id: uuid() };
        this.props.addTask(newTask);
        this.setState({task: ""})
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='NewTodoForm'>
				<input
					type='text'
					id='task'
					name='task'
					placeholder='Enter your task'
                    onChange={this.handleChange}
                    value={this.state.task}
				/>
				<button>Add Task</button>
			</form>
		);
	}
}

export default NewTodoForm;
