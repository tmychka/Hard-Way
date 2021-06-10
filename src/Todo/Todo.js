import React, { Component } from  'react'

import TodoList from './TodoList';
import AppHeader from './AppHeader';
import ItemStatusFilter from './ItemStatusFilter';
import ItemAddForm from './ItemAddForm';
import  Batery from '../components/Batery/Batery'
import Calendar from '../components/Calendar';
import './Todo.css'


export default class Todo extends Component {

    maxId = 100;
  
    state = {
      items: [
        { id: 1, label: 'Побігать кругі', important: false, done: false },
        { id: 2, label: 'Почитать телеграм', important: false, done: false },
        { id: 3, label: 'React', important: false, done: false },
        { id: 4, label: 'Повірстать', important: false, done: false },
        { id: 5, label: 'Сodwars', important: false, done: false },
        { id: 6, label: 'Learn Js', important: false, done: false },
        { id: 7, label: 'Англійська', important: false, done: false },
        { id: 8, label: 'Попічатать', important: false, done: false },
        { id: 9, label: 'Sport', important: false, done: false }
      ],
      filter: 'all',
      search: ''
    };

    get progress() {
       const itemsDone = this.state.items.filter((item) => item.done === true)
       return Math.round((itemsDone.length * 100) / this.state.items.length) + '%'
    }


    onItemAdded = (label) => {
      this.setState((state) => {
        const item = this.createItem(label);
        return { items: [...state.items, item] };
      })
    };
  
    toggleProperty = (arr, id, propName) => {
      const idx = arr.findIndex((item) => item.id === id);
      const oldItem = arr[idx];
      const value = !oldItem[propName];
  
      const item = { ...arr[idx], [propName]: value } ;
      return [
        ...arr.slice(0, idx),
        item,
        ...arr.slice(idx + 1)
      ];
    };
  
    onToggleDone = (id) => {
      this.setState((state) => {
        const items = this.toggleProperty(state.items, id, 'done');
        return { items };
      });
    };
  
    onToggleImportant = (id) => {
      this.setState((state) => {
        const items = this.toggleProperty(state.items, id, 'important');
        return { items };
      });
    };
  
    onDelete = (id) => {
      this.setState((state) => {
        const idx = state.items.findIndex((item) => item.id === id);
        const items = [
          ...state.items.slice(0, idx),
          ...state.items.slice(idx + 1)
        ];
        return { items };
      });
    };
  
    onFilterChange = (filter) => {
      this.setState({ filter });
    };
  
    onSearchChange = (search) => {
      this.setState({ search });
    };
    onChange
    createItem(label) {
      return {
        id: ++this.maxId,
        label,
        important: false,
        done: false
      };
    }
  
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
      const { items, filter, search } = this.state;
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
                      onToggleImportant={this.onToggleImportant}
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
  