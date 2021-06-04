import React from 'react';

import './ItemStatusFilter.css'

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

const style = {
  padding: '2px 15px',
  height: '38px',
  position: 'realetive',
  top: '20px',
  left: '190px',
  boxShadow: 'none',
  color:  'tomato',
}

const ItemStatusFilter = ({filter, onFilterChange = () => {}}) => {

  const buttons = filterButtons.map(({name, label}) => {
    const isActive = name === filter;
    const classNames = 'btn ' + (isActive ? 'btn' : 'btn');

    return (
      <button key={name}
              type="button"
              onClick={() => onFilterChange(name)}
              className={classNames}
              style={style  }>{label}</button>
    );
  });

  return (
    <div className="btn-group">
      { buttons }
    </div>
  );
};

export default ItemStatusFilter;