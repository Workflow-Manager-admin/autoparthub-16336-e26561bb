// PUBLIC_INTERFACE
import React from 'react';
import Modal from '../Modal/Modal';

/**
 * ProductDetailModal - displays full details of the selected part in a modal.
 * @param {Object} part - The selected part object (expects name, image, etc)
 * @param {Function} onClose - function to close the modal
 */
function ProductDetailModal({ part, onClose }) {
  if (!part) return null;

  const { name, image } = part;
  const placeholder = 'https://via.placeholder.com/160x160?text=No+Image';

  return (
    <Modal isOpen={!!part} onClose={onClose}>
      <div className="product-detail-modal-content" style={{ textAlign: 'center', minWidth: 270 }}>
        <img
          src={image || placeholder}
          alt={name}
          style={{
            width: 160,
            height: 160,
            objectFit: 'contain',
            background: '#f3f6f9',
            borderRadius: 9,
            marginBottom: 18
          }}
          onError={e => {
            e.target.onerror = null;
            e.target.src = placeholder;
          }}
        />
        <h2 style={{ marginBottom: 10 }}>{name}</h2>
        <div style={{ color: '#757575', fontSize: '1.02rem', marginBottom: '22px' }}>
          {/* Placeholder for further details */}
          <em>More specifications and compatibility info coming soon.</em>
        </div>
        <button className="btn" type="button" onClick={onClose} style={{ marginTop: 12 }}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ProductDetailModal;
