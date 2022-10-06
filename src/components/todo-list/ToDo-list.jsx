import React from 'react';
import { ToDoListItem } from '../todo-list-item/List-item';
import './ToDo-list.css';

const ToDolist = (props) => {
	const { todos, onDeleted, importantStatusHandler, doneStatusHandler } = props;

	const myToDos = Array.from(todos).map((item) => {
		return <ToDoListItem {...item} onDeleted={() => onDeleted(item.key)} importantStatusHandler={() => importantStatusHandler(item.key)} doneStatusHandler={() => doneStatusHandler(item.key)} />;
	});

	return <ul className='todo-list'>{myToDos}</ul>;
};

export { ToDolist };
