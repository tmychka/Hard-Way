import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ attributes: { title, done }, onToggleDone, onDelete }) => {

    let classNames = 'todo-list-item';

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
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDelete}>
             <i className="fas fa-trash" />
        </button>
      </span>
    );
};

export default TodoListItem;
