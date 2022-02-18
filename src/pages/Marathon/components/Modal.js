import { useState } from 'react';
import { createMarathon } from "../../../api/marathon";
import '../Marathon.css';

function Modal({ open, close, onCreateMarathon }) {
  
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [datebefore, setDateBefore] = useState("");
  const [dateafter, setDateAfter] = useState("");

  const handleTitleName = (e) => {
    setTitle(e.target.value);
  };

  const handleImageAdd = (e) => {
    setImage(e.target.value);
  };

  const handleDateFrom = (e) => {
    setDateBefore(e.target.value);
  };

  const handleTitleTo = (e) => {
    setDateAfter(e.target.value);
  };

  const closeModal = () => {
    setTitle("")
    setImage("")
    setDateBefore("")
    setDateAfter("")
    close();
  };

  const submitCreateMarathon = () => {
    if (!title || !image || !datebefore || !dateafter) return;
    const data = {
      data: {
        attributes: {
          title: title,
          cover_url: image,
          date_from: new Date(datebefore).toISOString(),
          date_to: new Date(dateafter).toISOString()
        },
      },
    };

    createMarathon(data).then(() => {
      closeModal();
      onCreateMarathon();
    });
  };

  return (
   open &&
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Create Marathon
            </h5>
          </div>
          <div className="modal-body d-block">
            <label className='name-label'>
              Name Marathon
              <input
                type='text'
                className='form-control' 
                value={title} onChange={handleTitleName} 
              />
            </label>
            <label className='name-label'>
              Background
              <input
                type='text'
                className='form-control' 
                value={image} 
                onChange={handleImageAdd} 
              />
            </label>
            <div className='input-marathon'>
              <label className='name-label width-input1'>
                from
                <input
                  type='datetime-local'
                  className='form-control' 
                  value={datebefore} onChange={handleDateFrom}
                />
              </label>
              <label className='name-label width-input2'>
                to
                <input
                  type='datetime-local'
                  className='form-control' 
                  value={dateafter} 
                  onChange={handleTitleTo} 
                />
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button" 
              className="btn btn-dark" 
              onClick={closeModal}
            > Close
            </button>
            <button 
              type="button" 
              className="btn btn-light" 
              onClick={submitCreateMarathon}
            > Create
            </button>
          </div>
        </div>
      </div>
   </div>
  );
};

export default Modal;