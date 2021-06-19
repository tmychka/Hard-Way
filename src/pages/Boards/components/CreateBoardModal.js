import React, {useState} from 'react';
import {createBoard} from '../../../api/boards';
import '../Boards.css';


function CreateBoardModal ({ open, onClose, onBoardCreated }) {
   const [title, setTitle] = useState('');
   const [date, setDate] = useState('');

   const handleTitleChange = (e) => {
      setTitle(e.target.value);
   };

   const handleDateChange = (e) => {
      setDate(e.target.value);
   };

   const handleClose = () => {
      setTitle('');
      setDate('');
      onClose();
   }
   
   const submitCreateBoard = () => {
      if (!title || !date) return
      const data = {
         data: {
            attributes: {
               title: title,
               date: new Date(date).toISOString(),
            }
         }
      };
      createBoard(data).then(() => {
         onBoardCreated();
         handleClose();
      })
   };


   return (
      <>
     
         { open && <div className='modal-board fade modal show modals'>
              <div className="modal-dialog">
                 <div className="modal-content active">
                     <div className="modal-header">
                         <h5 className="modal-title active">Create Board</h5>
                     </div>
                     <div className="modal-body d-flex">  
                        <input 
                           type='datetime-local'
                           className='create__date'
                           value={date} 
                           onChange={handleDateChange}  
                        />
                        <input 
                           type='text' 
                           className='create__input'
                           placeholder='...create'
                           value={title} 
                           onChange={handleTitleChange}                      
                        />
                     </div>
                     <div className="modal-footer active">
                        <button type="button"
                                onClick={handleClose}
                                className="btn btn-warning">
                                <i className="fas fa-times" />
                        </button>
                        <button
                           type="button"
                           className="btn btn-dark"
                           onClick={submitCreateBoard}
                        >
                           <i className="fas fa-check" />
                        </button>
                     </div>
                  </div>
               </div>
           </div>}
         </>
   )
}




export default CreateBoardModal;