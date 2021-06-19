import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getActiveBoards } from '../../api/boards';

const imgUrl = 'https://images.unsplash.com/photo-1606166325695-ce4d64e3195f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

const Dashboard = () => {
    const [activeBoardId, setActiveBoardId] = useState();

    useEffect(() => {
        getActiveBoards().then((res) => { 
           const activeBoards = res.data.data;
           if (activeBoards.length) {
               setActiveBoardId(activeBoards[0].id)
           }
        });
    }, [])

    const redirectPath = activeBoardId ? `/boards/${activeBoardId}` : `/boards`;

    return (
        <div className='dashboard'>
            <div className='conteiner'>
                <h1>Hello Boss! <br/> you need this box</h1>
            </div>
            <div className='box'>
                <Link to={redirectPath}>
                    <img src={imgUrl} />
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;