import React from 'react';

import './Batery.css';

const Batery = ({ value }) => {
    return (
        <div className='bax'>
            <div className='content'>
                <div className="percent"></div>
                <div className='batteryShape'>
                    <div className='level'>
                        <div className="percentage" style={{width: value}}>{value}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Batery;
