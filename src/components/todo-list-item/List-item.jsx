import React, { Component } from 'react';
import { Button } from '../button/Button';
import './List-item.css';

class ToDoListItem extends Component {
	render() {
		const { todo, onDeleted, importantStatusHandler, doneStatusHandler, important, done } = this.props;

		return (
			<div className='todoItem-container'>
				<li className={!important ? 'todo-item' : 'todo-item important'} onClick={doneStatusHandler} style={done ? { textDecoration: 'line-through', textDecorationThickness: '1.5px' } : { textDecoration: 'none' }}>
					{todo}
				</li>
				<div className='todo-item__btns'>
					<Button label='' classes='btn-outline-danger bi bi-trash3 delete-btn btn' handler={onDeleted} />
					<Button label='' classes='btn-outline-success bi bi-exclamation-circle-fill done-btn btn' handler={importantStatusHandler} />
				</div>
			</div>
		);
	}
}

export { ToDoListItem };

// Реализовано так

// itemOnClick = () => {
//   this.setState((state) => {
//     return { done: !this.state.done };
//   });
// };

// а не так

// itemOnClick = this.setState({
//     important: !this.state.important
// });

// потому как метод setState асинхронный,
// и при втором способе изменения стейта иногда может выдавать ошибки;
