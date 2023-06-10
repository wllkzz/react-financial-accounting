import React from 'react';
import Graphic from '../components/Graphic';

function Modal({ totalExpense, totalIncome, onClose }) {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleGraphClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-gray-200" onClick={handleOverlayClick}>
      <div className="modal-content bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4" onClick={handleGraphClick}>
        <div className="max-w-full">
          <Graphic totalIncome={totalIncome} totalExpense={totalExpense} />
          <button className="absolute top-0 right-0 m-4" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
