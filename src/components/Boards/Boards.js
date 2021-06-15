import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { format } from 'date-fns';

import App from '../../App';
import {getBoards, removeBoard} from '../../api/boards';
import CreateBoardModal from './CreateBoardModal';
import './Boards.css';




const Boards = () => {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        getBoards().then((res) => { 
           setBoards(res.data.data)});
     }, [])

  
    const remove = (id) => {
       removeBoard(id).then(() => {   
           setBoards((prevBoards) => prevBoards.filter(board => board.id !== id))
      }) 
  }
     
    return (
      <>
       <div className='boards-app'>
           <nav className='boards-nav'>
               <a className='boards-home' href='/'><i className="fas fa-home"></i></a>
               <CreateBoardModal />
           </nav>
           {boards.map(board => (
                  <div key={board.id} className='boards-box'>
                     <div className='board'>
                       <button className='btn btn-outline-danger remove' onClick={() => remove(board.id)}><i className="fas fa-trash" ></i></button>
                        <div className='board-title'>
                           <h1>{board.attributes.title}</h1>
                           <span>{format(new Date(board.attributes.date), 'MM.dd.yyyy')}</span>
                        </div>
                     </div>
                  </div>
            ))}
            
      </div>
                       
     </>
    )
}

<Router>
  <Switch>
      <Route exact path="/" component={App} /> 
  </Switch>
</Router>

export default Boards