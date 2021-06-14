import React, { useEffect, useState } from 'react'
import App from '../../App'
import {getBoards, removeBoard} from '../../api/boards'
import CreateBoardModal from './CreateBoardModal'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Boards.css'




const Boards = () => {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        getBoards().then((res) => { 
           setBoards(res.data.data)});
     }, [])

    const addBoard = () => {
      console.log('Click on add Board')
    }
  
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
               <h1>Boards</h1>
               <button
                   type="button"
                   className="btn btn-info  boards-btn"
                   onClick={() => addBoard()}>
                   BOARDS + 
               </button>
           </nav>
           {boards.map(board => (
                  <div key={board.id} className='boards-box'>
                     <div  className='board'>
                       <button className='btn btn-outline-danger remove' onClick={() => remove(board.id)}><i className='fas fas-danger'></i></button>
                        <div className='board-title'>
                           <h1>{board.attributes.title}</h1>
                           <span>{board.attributes.date}</span>
                        </div>
                     </div>
                   </div>
            ))}
            
        </div>
                        <CreateBoardModal />
     </>
    )
}

<Router>
  <Switch>
      <Route exact path="/" component={App} /> 
  </Switch>
</Router>

export default Boards