import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { SearchPanel } from './components/search-panel/Search-panel';
import { SearchFilters } from './components/search-filters/searchFilters';
import { ToDolist } from './components/todo-list/ToDo-list';
import { Button } from './components/button/Button';

class App extends Component {
	state = {
		todoData: localStorage.dataArr
			? JSON.parse(localStorage.dataArr)
			: [
					{ todo: 'Drink cofee', important: false, done: false, key: 0 },
					{ todo: 'Learn React', important: true, done: false, key: 1 },
					{ todo: 'Use TypeScript', important: true, done: false, key: 2 },
			  ],
		addToDoInputValue: '',
		searchToDoInputValue: '',
		todoFilterStatus: 'All',
	};

	doneToDoCount = () => {
		return this.state.todoData.reduce((acc, cur) => {
			return acc + (cur.done ? 1 : 0);
		}, 0);
	};
	notDoneToDoCount = () => {
		return this.state.todoData.length - this.doneToDoCount();
	};

	deleteToDoItem = (id) => {
		this.setState(({ todoData }) => {
			const newArr = Array.from(todoData).filter((item) => item.key !== id);

			return {
				todoData: newArr,
			};
		});
	};

	addToDoItem = (e) => {
		e.preventDefault();
		const newToDoTitle = this.state.addToDoInputValue
			? this.state.addToDoInputValue
					.toLowerCase()
					.trim()
					.split('')
					.map((item, idx) => (idx === 0 ? item.toUpperCase() : item))
					.join('')
			: 'My new todo';
		const newToDoArr = [...Array.from(this.state.todoData), { todo: newToDoTitle, important: false, done: false, key: Date.now() }];

		this.setState((state) => {
			return {
				todoData: newToDoArr,
			};
		});
		this.setState({
			addToDoInputValue: 'new todo',
		});
	};

	filterToDoInputHandler = (e) => {
		this.setState({
			searchToDoInputValue: e.target.value,
		});
	};

	filtersHandler = (status) => {
		this.setState({
			todoFilterStatus: status,
		});
	};

	addToDoInputHandler = (e) => {
		this.setState((state) => {
			return {
				addToDoInputValue: e.target.value,
			};
		});
	};

	importantStatusHandler = (id) => {
		const newDataArr = this.state.todoData.map((item) => {
			if (item.key === id) {
				item.important = !item.important;
			}
			return item;
		});
		this.setState((state) => {
			return {
				todoData: newDataArr,
			};
		});
	};

	doneStatusHandler = (id) => {
		const newDataArr = this.state.todoData.map((item) => {
			if (item.key === id) {
				item.done = !item.done;
			}
			return item;
		});
		this.setState((state) => {
			return {
				todoData: newDataArr,
			};
		});
	};

	render() {
		const filteredDataArr = () => {
			if (this.state.todoFilterStatus === 'All') {
				return this.state.searchToDoInputValue ? this.state.todoData.filter((item) => item.todo.toLowerCase().includes(this.state.searchToDoInputValue.toLowerCase())) : this.state.todoData;
			}
			if (this.state.todoFilterStatus === 'Active') {
				return this.state.searchToDoInputValue ? this.state.todoData.filter((item) => item.todo.toLowerCase().includes(this.state.searchToDoInputValue.toLowerCase())) : this.state.todoData.filter((item) => item.done === false);
			}
			if (this.state.todoFilterStatus === 'Done') {
				return this.state.searchToDoInputValue ? this.state.todoData.filter((item) => item.todo.toLowerCase().includes(this.state.searchToDoInputValue.toLowerCase())) : this.state.todoData.filter((item) => item.done === true);
			}
		};

		window.addEventListener('beforeunload', () => {
			localStorage.dataArr = JSON.stringify(this.state.todoData);
		});

		return (
			<>
				<Header doneToDoCount={this.doneToDoCount} notDoneToDoCount={this.notDoneToDoCount} />
				<div className='search-container'>
					<SearchPanel className='search-input' placeholder='type to search' handler={this.filterToDoInputHandler} value={this.state.searchToDoInputValue} />
					<SearchFilters filtersHandler={this.filtersHandler} />
				</div>
				<ToDolist todos={filteredDataArr()} onDeleted={this.deleteToDoItem} importantStatusHandler={this.importantStatusHandler} doneStatusHandler={this.doneStatusHandler} />

				<form className='todoAdd-container' onSubmit={this.addToDoItem}>
					<SearchPanel className='addToDo-input' placeholder='new todo' value={this.state.addToDoInputValue} handler={this.addToDoInputHandler} />
					<Button label='Add' classes={'addToDo-btn btn btn-outline-dark'} handler={this.addToDoItem} />
				</form>
			</>
		);
	}
}

export default App;
