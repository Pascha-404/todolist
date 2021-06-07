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

	// sets the state with the items in localStorage (if there is no local storage -> it creats an empty one)
	getTasks() {
		if (!localStorage.tasks) {
			localStorage.setItem('tasks', '[]');
		} else {
			const localTasks = localStorage.getItem('tasks');
			const todos = JSON.parse(localTasks);
			return todos;
		}
	}

	// gets the localStorage and parse it to an object
	getAndParse(keyword) {
		const getItem = localStorage.getItem(keyword);
		return JSON.parse(getItem);
	}

	// transforms the todo-object into a string, sets the localStorage to the updated version and refreshs the state
	stringifyAndSet(variable, keyword) {
		const stringifyTodos = JSON.stringify(variable);
		localStorage.setItem(keyword, stringifyTodos);
		this.setState({ tasks: this.getTasks() });
	}

	// adds a task to the localStorage list
	addTask(taskObj) {
		const todos = this.getAndParse('tasks');
		todos.push(taskObj);
		this.stringifyAndSet(todos, 'tasks');
	}

	// deletes a task from the localStorage list
	deleteTask(taskId) {
		const todos = this.getAndParse('tasks');
		const filteredTodos = todos.filter(task => task.id !== taskId);
		this.stringifyAndSet(filteredTodos, 'tasks');
	}

	// edits a task from the localStorage list
	editTask(id, task) {
		let tasks = this.getAndParse('tasks');
		const idx = tasks.findIndex(task => task.id === id);
		tasks[idx].newTask = task;
		this.stringifyAndSet(tasks, 'tasks');
	}

	// toggles the boolean of isDone in the localStorage list
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
