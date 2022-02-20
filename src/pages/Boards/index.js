import React, { useEffect, useState, useCallback } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { getBoards, deleteBoard } from '../../api/boards';
import CreateBoardModal from './components/CreateBoardModal';
import './Boards.css';
import Loading from '../../components/Loading/Loading';

const Boards = () => {
  const [boards, setBoards] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchBoards = useCallback(() => {
    setLoading(true);

    getBoards().then(({ data }) => {
      setLoading(false);
      setBoards(data);
    });
  }, []);

  useEffect(() => {
    fetchBoards();
  }, []);

  const handleRemove = (id) => {
    deleteBoard(id).then(() => {
      setBoards((prevBoards) => prevBoards.filter(board => board.id !== id));
    });
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  if(loading) {
    return <Loading />;
  }

  return (
    <>
      <div className='boards-app'>
        <nav className='boards-nav'>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => setOpen(true)}
          >
            +
          </button>
        </nav>
        <div className="d-flex flex-wrap flex-board">
          {boards.map(board => (
            <div key={board.id} className='boards-box'>
              <div className='board'>
                <button
                  className='btn btn-outline-success remove'
                  onClick={() => handleRemove(board.id)}
                >
                  <i className="fas fa-trash" />
                </button>
                <div className='board-title'>
                  <h1>
                    <Link to={`/boards/${board.id}`}>{board.title}</Link>
                  </h1>
                  <span>
                    {format(new Date(board.date), 'MM.dd.yyyy')}
                  </span>
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
