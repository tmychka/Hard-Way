import { useState } from 'react';
import { createMarathonTask } from '../../../api/marathon'
import '../Marathon.css';

function ModalTask({ close, modal  }) {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleClose = () => {
    setTitle("");
    setDate("");
    close();
  };

  const submitCreateBoard = () => {
    if (!title || !date) return;
    const data = {
      data: {
        attributes: {
          title: title,
          date: new Date(date).toISOString(),
        },
      },
    };

    createMarathonTask(data).then(() => {
      // onBoardCreated();
      close();
    });
  };

  return (
   modal &&
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Tasks</h5>
            <button type="button" className="btn-close"></button>
          </div>
          <div className="modal-body">
            <input
              type="datetime-local"
              className="create__date"
              value={date}
              onChange={handleDateChange}
            />
            <input
              type="text"
              className="create__input"
              placeholder="...create"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" onClick={handleClose}>Close</button>
            <button type="button" class="btn btn-light" onClick={submitCreateBoard}>Create</button>
          </div>
        </div>
      </div>
  </div>
  );
};

export default ModalTask;