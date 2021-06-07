import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { tasks: this.getTasks() };
		this.addTask = this.addTask.bind(this);
		this.renderTasks = this.renderTasks.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.editTask = this.editTask.bind(this);
		this.changeIsDone = this.changeIsDone.bind(this);
	}

	getTasks() {
		if (!localStorage.tasks) {
			localStorage.setItem('tasks', '[]');
		} else {
			const localTasks = localStorage.getItem('tasks');
			const todos = JSON.parse(localTasks);
			return todos;
		}
	}

	getAndParse(keyword) {
		const getItem = localStorage.getItem(keyword);
		return JSON.parse(getItem);
	}

	stringifyAndSet(variable, keyword) {
		const stringifyTodos = JSON.stringify(variable);
		localStorage.setItem(keyword, stringifyTodos);
		this.setState({ tasks: this.getTasks() });
	}

	addTask(taskObj) {
		// this.setState(curState => ({ tasks: [...curState.tasks, taskObj] }));
		const todos = this.getAndParse('tasks');
		todos.push(taskObj);
		this.stringifyAndSet(todos, 'tasks');
	}

	deleteTask(taskId) {
		const todos = this.getAndParse('tasks');
		const filteredTodos = todos.filter(task => task.id !== taskId);
		this.stringifyAndSet(filteredTodos, 'tasks');
	}

	editTask(id, task) {
		let tasks = this.getAndParse('tasks');
		const idx = tasks.findIndex(task => task.id === id);
		tasks[idx].newTask = task;
		this.stringifyAndSet(tasks, 'tasks');
	}

	changeIsDone(id) {
		let tasks = this.getAndParse('tasks');
		const idx = tasks.findIndex(task => task.id === id);
		tasks[idx].isDone = !tasks[idx].isDone;
		this.stringifyAndSet(tasks, 'tasks');
		console.log(tasks[idx].isDone);
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
				changeIsDone={this.changeIsDone}
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
