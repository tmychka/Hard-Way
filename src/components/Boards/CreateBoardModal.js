import React, {useState} from 'react'
import classNames from 'classnames'

import './Boards.css'


function CreateBoardModal ({ open }) {
  




    let x = 'modal modal-board fade'

   if(!open) {
       x += ' show'
   }


   return (


       <>
       
          <div className={x}>
              <div className="modal-dialog">
                 <div className="modal-content active">
                     <div className="modal-header">
                         <h5 className="modal-title">Create Board</h5>
                     </div>
                     <div className="modal-body d-flex">  
                        <input type='date' className='create__date' />
                        <input type='text' className='create__input' placeholder='...create' />
                     </div>
                     <div className="modal-footer active">
                        <button type="button" className="btn btn-warning"><i className="fas fa-times"></i></button>
                        <button type="button" className="btn btn-dark"><i className="fas fa-check"></i></button>
                     </div>
                  </div>
               </div>
           </div>
       </>
   )
}




export default CreateBoardModal;