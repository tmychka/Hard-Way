import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getActiveBoards } from '../../api/boards';

import './Dashboard.css';

const Dashboard = () => {
  const [activeBoardId, setActiveBoardId] = useState();

  useEffect(() => {
    getActiveBoards().then(({ data }) => {
      if (data.length) {
        setActiveBoardId(data[0].id);
      }
    });
  }, []);

  const redirectPath = activeBoardId ? `/boards/${activeBoardId}` : `/boards`;

  return (
    <div className='dashboard'>
      <div className='conteiner'>
        <h1>Hello Boss! <br/> you need this box</h1>
      </div>
      <div className='box'>
        <Link to={redirectPath}>
          <span>Tasks</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
