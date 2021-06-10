import React, { useEffect, useState } from 'react'
import App from '../../App'
import {getBoards} from '../../api/boards'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Boards.css'


const addBoard = () => {
    console.log('Click on add Board')
}


const Boards = () => {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        getBoards().then((res) => {setBoards(res.data.data)});
     }, [])
     
    return (
       <div className='boards-app'>
           <nav className='boards-nav'>
               <a className='boards-home' href='/'><i className="fas fa-home"></i></a>
               <h1>Boards</h1>
               <button
                   type="button"
                   class="btn btn-info  boards-btn"
                   onClick={() => addBoard()}>
                   BOARDS + 
               </button>
           </nav>
           <div className='boards-box'>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>08.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>08.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>09.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>10.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>11.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>12.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>13.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>14.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>15.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>16.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>17.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>18.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>19.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>20.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>21.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>22.06.2021</span>
               </div>
             </div>
             <div className='board'>
               <div className='board-title'>
                   <h1>Monday</h1>
                   <span>23.06.2021</span>
               </div>
             </div>
           </div>
       </div>
    )
}

<Router>
  <Switch>
      <Route exact path="/" component={App} /> 
  </Switch>
</Router>

export default Boards