import React, { Component } from  'react';

import TodoList from './TodoList';
import AppHeader from './AppHeader';
import ItemStatusFilter from './ItemStatusFilter';
import ItemAddForm from './ItemAddForm';
import  Batery from '../components/Batery/Batery';
import Calendar from '../components/Calendar';
import './Todo.css';

export default class Todo extends Component {
    state = {
      filter: 'all',
      search: '',
    };

    get progress() {
      if (!this.props.items.length) return '0%'
      const itemsDone = this.props.items.filter((item) => item.done === true);
      return Math.round((itemsDone.length * 100) / this.props.items.length) + '%';
    }

    onItemAdded = (label) => {
       this.props.onCreateItem(label);
    };

    toggleProperty = (arr, id, propName) => {
      const idx = arr.findIndex((item) => item.id === id);
      const oldItem = arr[idx];
      const value = !oldItem[propName];

      const item = { ...arr[idx], [propName]: value } ;
      return [
        ...arr.slice(0, idx),
        item,
        ...arr.slice(idx + 1),
      ];
    };

    onToggleDone = (id, done) => {
       this.props.onUpdateItem(id, done);
    };

    onDelete = (id) => {
        this.props.onDeleteItem(id);
    };

    onFilterChange = (filter) => {
      this.setState({ filter });
    };

    onSearchChange = (search) => {
      this.setState({ search });
    };

    filterItems(items, filter) {
      if (filter === 'all') {
        return items;
      } else if (filter === 'active') {
        return items.filter((item) => (!item.done));
      } else if (filter === 'done') {
        return items.filter((item) => item.done);
      }
    }

    searchItems(items, search) {
      if (search.length === 0) {
        return items;
      }

      return items.filter((item) => {
        return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    }

    render() {
      const { items } = this.props;
      const { filter, search } = this.state;
      const doneCount = items.filter((item) => item.done).length;
      const toDoCount = items.length - doneCount;
      const visibleItems = this.searchItems(this.filterItems(items, filter), search);

      return (
        <div className='app-todo'>
          <div className="todo-app">
              <AppHeader toDo={toDoCount} done={doneCount}/>

            <div className="search-panel d-flex">
              <ItemAddForm
                         onItemAdded={this.onItemAdded} />
              <ItemStatusFilter
                         filter={filter}
                         onFilterChange={this.onFilterChange} />
            </div>
              <TodoList
                      items={ visibleItems }
                      onToggleDone={this.onToggleDone}
                      onDelete={this.onDelete} />

            <div className='d-flex batery'>
              <Batery value={this.progress} />
              <Calendar />
            </div>
          </div>
        </div>
      );
    };
  }
