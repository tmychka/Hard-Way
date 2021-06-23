import React, { useEffect, useState, useCallback } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import {getBoards, removeBoard} from '../../api/boards';
import CreateBoardModal from './components/CreateBoardModal';
import './Boards.css';

const Boards = () => {
    const [boards, setBoards] = useState([]);
    const [open, setOpen] = useState(false)

    const fetchBoards = useCallback(() => {
        getBoards().then((res) => { 
            setBoards(res.data.data);
         }); 
    }, []);

    useEffect(() => {
        fetchBoards();
    }, []);

    const handleRemove = (id) => {
        removeBoard(id).then(() => {   
            setBoards((prevBoards) => prevBoards.filter(board => board.id !== id))
        });
    };

    const handleClose = useCallback(() => {
       setOpen(false);
    }, []);
     
    return (
      <>
        <div className='boards-app'>
            <nav className='boards-nav'>
                <button
                    type="button"
                    className="btn btn-warning boards-btn"
                    onClick={() => setOpen(true)}
                >
                    + 
                </button>
            </nav>
            <div className="d-flex flex-wrap">
                {boards.map(board => (
                    <div key={board.id} className='boards-box'>
                        <div className='board'>
                            <button 
                                className='btn btn-outline-danger remove'
                                onClick={() => handleRemove(board.id)}
                            >
                                <i className="fas fa-trash" />
                            </button>
                            <div className='board-title'>
                               <h1><Link to={`/boards/${board.id}`}>{board.attributes.title}</Link></h1>
                               <span>{format(new Date(board.attributes.date), 'MM.dd.yyyy')}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <CreateBoardModal 
            open={open}
            onClose={handleClose}
            onBoardCreated={fetchBoards}
        />        
     </>
    );
};

export default Boards;
