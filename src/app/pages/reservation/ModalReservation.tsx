import React from 'react';
import { AiOutlineArrowDown, AiOutlineCloseCircle } from 'react-icons/ai';
import AddReservation from './AddReservation';

const ModalReservation = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button className="buttonReservation" onClick={() => setIsOpen(true)}>
        Vous pouvez proceder à la location <AiOutlineArrowDown />
      </button>
      {modalIsOpen ? <AddReservation setIsOpen={setIsOpen} /> : null}
    </div>
  );
};

export default ModalReservation;
