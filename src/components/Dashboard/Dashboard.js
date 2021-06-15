import React, { useEffect } from 'react';
import { getActiveBoards } from '../../api/boards';


const Dashboard = () => {

    useEffect(() => {
        getActiveBoards().then((res) => { 
           console.log(res.data.data)});
     }, [])



    return (
        <div className='App2'>
            <div className='conteiner'>
                <h1>Hello Boss! <br/> you need this box</h1>
            </div>
            <div className='box'>
                <a href='/boards/1'>
                    <img src='https://images.unsplash.com/photo-1606166325695-ce4d64e3195f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
                </a>
            </div>
        </div>
    )
}





export default Dashboard;