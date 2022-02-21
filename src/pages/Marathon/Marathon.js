import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { format } from 'date-fns';
import ModalTask from './components/ModalTask';
import Stat from './components/Stat';
import { getMarathonById, getMarathonBoards, deleteBoard } from '../../api/marathon';

import './Marathon.css';

function Marathon() {
  const { marathonId } = useParams();
  const [modal, setModal] = useState(false);
  const [marathon, setMarathon] = useState();
  const [boards, setBoards] = useState([]);

   
  const fetchBoards = () => {
    getMarathonBoards(marathonId).then(({ data }) => {
       setBoards(data);
    });
  }

  useEffect(() => {

    getMarathonById(marathonId).then(({ data }) => {
      setMarathon(data);
   });

   fetchBoards()

  }, []);

  const handleRemove = (id) => {
    deleteBoard(id).then(() => {
      setBoards((prevBoards) => prevBoards.filter(board => board.id !== id));
    });
  };

  const handleModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className='tasks'>
      <div className='d-flex title-tasks'>
        <h1>
          <button className='btn btn-dark' onClick={handleModal}>
            Create Board
          </button>
          <span>{ marathon?.title }</span>
          today new task
        </h1>
      </div>
      <div className='d-flex flex-wrap task'>
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
        <div className='stat-marafon'>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Task</th>
                <th scope="col">Done</th>
                <th scope="col">%</th>
              </tr>
            </thead>
            <tbody>
            <Stat />
            <tr>
              <th scope="row">
                {marathon && (
                  <>
                    {format(new Date(marathon.date_from), 'd')} / {format(new Date(marathon.date_to), 'd')}
                  </>
                )}
              </th>
              <td colSpan="2">{ format(new Date(), 'MMM d, yyyy') }</td>
              <td>[ 3% ]</td>
            </tr>
            </tbody>
          </table>
        </div>
      <ModalTask
        close={handleCloseModal}
        marathonId={marathonId}
        modal={modal}
        onBoardCreated={fetchBoards}
      />
    </div>
  );
}

export default Marathon;
