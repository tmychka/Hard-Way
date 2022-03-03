import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import Modal from './components/Modal';
import { getMarathons, removeMarathon } from '../../api/marathon';

import './Marathon.css';

function Marathons() {
  const [modal, setModal] = useState(false);
  const [marathon, setMarathon] = useState([]);

  const fetchMarathon = useCallback(() => {
    // setLoading(true)

    getMarathons().then(({ data }) => {
      // setLoading(false)
      setMarathon(data);
    });
  }, []);

  useEffect(() => {
    fetchMarathon();
  }, []);

  const handleRemove = (id) => {
    removeMarathon(id).then(() => {
      setMarathon((prevBoards) => prevBoards.filter(marathon => marathon.id !== id));
    });
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const value = '0%';

  return (
    <div className='marathon-app'>
      <div className='marathon-plus'>
        <h1 className='marathon-title'>Marathons</h1>
        <button
          className='btn btn-outline-danger'
          onClick={openModal}
        >
          +
        </button>
      </div>
      {marathon.map(marathon => (
        <div className='newcontent'key={marathon.id}>
          <div
            className='newcontainer'
            style={{ backgroundImage: `url(${marathon.cover_url})`,
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}
          >
            <div className='newtitle'>
              <h1>{marathon.title}</h1>
            </div>
            <div className='newdate'>
              <span className='datemonth'>
                {format(new Date(marathon.date_from), 'd')} /
                {format(new Date(marathon.date_to), 'd')}
              </span>
                &nbsp;&nbsp;
              <span className='date-fns'>
                { format(new Date(), 'MMM d, yyyy') }
              </span>
            </div>
            <div className='cirlce'>
              <div className='stati1'>
                <div>
                  <h3 className='values'>{value}</h3>
                  <h5>DONE</h5>
                </div>
              </div>
              <div className='stati2'>
                <div>
                  <h3 className='values'>{ format(new Date(), 'd') }</h3>
                  <h5>DAY</h5>
                </div>
              </div>
            </div>
            <div className='newbutton'>
              <button
                className='btn btn-primary'
                onClick={() => handleRemove(marathon.id)}
              >
                Delete
              </button>
              <button className='btn btn-outline-light'>
                <Link to={`/marathon/${marathon.id}`} className='shar'>Start</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
      <Modal
        open={modal}
        close={closeModal}
        onCreateMarathon={fetchMarathon} />
    </div>
  );
};

export default Marathons;
