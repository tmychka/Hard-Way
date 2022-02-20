import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { format } from 'date-fns';
import ModalTask from './components/ModalTask';
import Stat from './components/Stat';
import { getMarathonById, getMarathonBoards } from '../../api/marathon';

import './Marathon.css';

function Marathon() {
  const { marathonId } = useParams();
  const [modal, setModal] = useState(false);
  const [marathon, setMarathon] = useState();
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getMarathonById(marathonId).then(({ data }) => {
       setMarathon(data);
    });

    getMarathonBoards(marathonId).then(({ data }) => {
      setBoards(data);
   });
  }, []);

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
      <div className='container-tasks'>
        <div className='task'>
          <h1>Boards</h1>
          <div>
            {boards.map(board => (
              <div>{board.name}</div>
            ))}
          </div>
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
      </div>
      <ModalTask
        close={handleCloseModal}
        marathonId={marathonId}
        modal={modal}
      />
    </div>
  );
}

export default Marathon;
