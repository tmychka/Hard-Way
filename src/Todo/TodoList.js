import React from 'react';
import TodoListItem from './TodoListItem';

import './TodoList.css'

const TodoList = ({ items, onToggleDone, onDelete }) => {

const elements = items.map((item) => {
const { id, ...itemProps } = item;    

    return (
           <li key={id} className='list-group-item' >
               <TodoListItem
                      { ...itemProps }
                      onToggleDone={ () => onToggleDone(id, itemProps.attributes.done) }
                      onDelete={ () => onDelete(id) }       
               />
           </li>
       )
    });


    return (
        <ul className="list-group todo-list" >
           { elements }
        </ul>
    );
};

export default TodoList