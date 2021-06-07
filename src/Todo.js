import React, { Component } from 'react';
import './Todo.css';
import deleteImg from './img/delete.png';
import editImg from './img/edit.png';
import saveImg from './img/save.png';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			task: this.props.task,
			isDone: this.props.isDone,
		};
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleDelete(evt) {
		this.props.deleteTask(this.props.id);
	}

	handleEdit(evt) {
		let edit = this.state.edit;
		edit = !edit;
		this.setState({ edit });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.editTask(this.props.id, this.state.task);
		this.handleEdit();
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleClick(evt) {
		let isDone = this.state.isDone;
		isDone = !isDone;
		this.setState({ isDone });
		this.props.changeIsDone(this.props.id);
	}

	render() {
		return (
			<div className='Todo'>
				{this.state.edit ? (
					<form className='Todo-editForm' onSubmit={this.handleSubmit}>
						<input
							type='text'
							name='task'
							id='task'
							value={this.state.task}
							onChange={this.handleChange}
							autoFocus
						/>
						<button className='Todo-btn'>
							<img src={saveImg} alt='save' />
						</button>
					</form>
				) : (
					<p
						className={this.state.isDone ? 'Todo-data done' : 'Todo-data'}
						onClick={this.handleClick}>
						{this.state.task}
					</p>
				)}
				<div className='Todo-btns'>
					<button className='Todo-btn' onClick={this.handleEdit}>
						<img src={editImg} alt='edit' />
					</button>
					<button className='Todo-btn' onClick={this.handleDelete}>
						<img src={deleteImg} alt='delete' />
					</button>
				</div>
			</div>
		);
	}
}

export default Todo;
