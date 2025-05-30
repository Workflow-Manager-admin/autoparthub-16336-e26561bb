import React from 'react';

// PUBLIC_INTERFACE
function Modal({ children, isOpen, onClose }) {
  // TODO: Implement core modal logic and display
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
