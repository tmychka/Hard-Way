import React from 'react';

import './Battery.css';

function Battery({ value }) {
  return (
    <div className='battery'>
      <div className='battery-shape'>
        <div className='battery-inner'>
          <div className="battery-charge" style={{ width: value }}>{value}</div>
        </div>
      </div>
    </div>
  );
};

export default Battery;
