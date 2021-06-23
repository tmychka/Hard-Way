import React from 'react';

import './TodoListItem.css';

const TodoListItem = ( {important, done, attributes: {title}, onToggleImportant, onToggleDone, onDelete} ) => {
  
    let classNames = 'todo-list-item';
  
     if (important) {
         classNames += ' important';
     }

     if (done) {
        classNames += ' done';
     }
 
    return ( 
      <span className={classNames}>
         <span
             className="todo-list-item-label"
             onClick={onToggleDone}>{title}
        </span>
        <button type="button"
                className="btn btn-outline-warning btn-sm float-right"
                onClick={onToggleImportant}>
             <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDelete}>
             <i className="fas fa-trash" />
        </button>
      </span>
    )
};

export default TodoListItem