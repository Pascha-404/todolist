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
		this.deleteTask = this.deleteTask.bind(this);
		this.editTask = this.editTask.bind(this);
	}

	addTask(taskObj) {
		this.setState(curState => ({ tasks: [...curState.tasks, taskObj] }));
	}

	deleteTask(taskId) {
		this.setState({
			tasks: this.state.tasks.filter(task => task.id !== taskId),
		});
	}

	editTask(id, task) {
		let tasks = this.state.tasks;
		console.log(tasks);
		const idx = tasks.findIndex(task => task.id === id);
		console.log(idx);
		tasks[idx].task = task;
		console.log(tasks);
		this.setState({ tasks });
	}

	renderTasks(evt) {
		return this.state.tasks.map(task => (
			<Todo
				task={task.newTask}
				isDone={task.isDone}
				id={task.id}
				key={task.id}
				deleteTask={this.deleteTask}
				editTask={this.editTask}
			/>
		));
	}

	render() {
		return (
			<section className='TodoList'>
				<h1 className='TodoList-title'>Todo List</h1>
				<NewTodoForm addTask={this.addTask} editTask={this.editTask} />
				<div className='TodoList-tasks'>{this.renderTasks()}</div>
			</section>
		);
	}
}

export default TodoList;
