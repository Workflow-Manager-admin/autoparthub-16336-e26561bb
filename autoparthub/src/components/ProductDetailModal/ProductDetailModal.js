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

  const { name, image, price, description } = part;
  const placeholder = 'https://via.placeholder.com/160x160?text=No+Image';

  return (
    <Modal isOpen={!!part} onClose={onClose}>
      <div className="product-detail-modal-content" style={{
        textAlign: 'center',
        minWidth: 290,
        padding: '8px 8px 22px 8px'
      }}>
        <img
          src={image || placeholder}
          alt={name}
          style={{
            width: 160,
            height: 160,
            objectFit: 'contain',
            background: '#f3f6f9',
            borderRadius: 9,
            marginBottom: 18,
            border: '1px solid #ececec'
          }}
          onError={e => {
            e.target.onerror = null;
            e.target.src = placeholder;
          }}
        />
        <h2 style={{ marginBottom: 6 }}>{name}</h2>
        <div
          style={{
            color: '#e87a41',
            fontWeight: 600,
            fontSize: '1.22rem',
            marginBottom: 6,
            letterSpacing: 0.01
          }}
          aria-label="Price"
        >
          ${price != null ? price.toFixed(2) : '—'}
        </div>
        <div
          style={{
            fontSize: '1.04rem',
            color: '#343432',
            marginBottom: '18px',
            lineHeight: '1.45',
            textAlign: 'center'
          }}
        >
          {description}
        </div>
        <div style={{ color: '#757575', fontSize: '0.99rem', marginBottom: '18px' }}>
          <em>More specifications and compatibility info coming soon.</em>
        </div>
        <button className="btn" type="button" onClick={onClose} style={{ marginTop: 8 }}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ProductDetailModal;
