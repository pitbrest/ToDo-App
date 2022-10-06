import React from 'react';
import './Header.css';

const Header = ({ doneToDoCount, notDoneToDoCount }) => {
	return (
		<div className='header-container'>
			<h1 className='header-title'>ToDo List</h1>
			<div className='header-info'>
				<div className='todo-count info-item'>
					<span>{notDoneToDoCount()} </span> more to do,
				</div>
				<div className='done-count info-item'>
					<span>{doneToDoCount()} </span> done
				</div>
			</div>
		</div>
	);
};

export { Header };
