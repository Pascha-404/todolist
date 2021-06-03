import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { tasks: [] };
		this.addTask = this.addTask.bind(this);
		this.renderTasks = this.renderTasks.bind(this);
	}

	addTask(taskObj) {
		this.setState(curState => ({ tasks: [...curState.tasks, taskObj] }));
		console.log(this.state.tasks);
	}

	renderTasks(evt) {
		return this.state.tasks.map(task => (
			<Todo task={task.task} isDone={task.isDone} id={task.id} key={task.id} />
		));
	}

	render() {
		return (
			<section className='TodoList'>
				<h1>Todo List</h1>
				<NewTodoForm addTask={this.addTask} />
				<div className='TodoList-tasks'>{this.renderTasks()}</div>
			</section>
		);
	}
}

export default TodoList;
