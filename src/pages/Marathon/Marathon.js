import { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { format } from 'date-fns'
import {getTask, getMarathonById} from '../../api/marathon';
import ModalTask from './components/ModalTask';
import Stat from './components/Stat';

import './Marathon.css';

function Marathon() {
  
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [marathon, setMarathon] = useState();

  useEffect(() => {
     getMarathonById(id).then((res) => { 
       setMarathon(res.data)
    })
  }, [])
    
  // const [task, setTask] = useState([]);

  const handleModal = () => {
    setModal(true)
  }

  const handleCloseModal = () => {
    setModal(false)
  }

  // const fetchTask = useCallback(() => {
  //   // setLoading(true)

  // //   getTask().then((res) => { 
  // //       console.log(res.data)
  // //       // setLoading(false)
  // //       setTask(res.data.data);
  // //   });       
  // // }, []);

  // useEffect(() => {
  //   fetchTask();
  // }, []);


  return (
    <div className='tasks'>
      <div className='d-flex title-tasks'>
        <h1>
          <button className='btn btn-dark' onClick={handleModal}>
            Create Task
          </button> 
          <span>{ marathon?.title }</span> 
          today new task
        </h1>
      </div>
      <div className='container-tasks'>
        <div className='task'>
           <h1>Tasks</h1> 
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
        modal={modal}
      />      
    </div>
  )
}

export default Marathon;