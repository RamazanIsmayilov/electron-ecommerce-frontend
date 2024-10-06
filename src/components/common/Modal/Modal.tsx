import React from 'react';
import { MdClose } from "react-icons/md";

interface ModalProps {
  title?: string;
  handleClose: () => void;
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ title, handleClose, children }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className="modal-header d-flex justify-content-between align-items-center mb-0">
          <h2 className='fs-4 fw-bold'>{title}</h2>
          <button onClick={handleClose} className='border-0 bg-transparent text-danger fs-3'><MdClose /></button>
        </div>
        <div className="modal-body pt-3">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
