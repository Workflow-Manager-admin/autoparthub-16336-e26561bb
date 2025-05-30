// PUBLIC_INTERFACE
import React from 'react';
import Modal from '../Modal/Modal';

/**
 * ProductDetailModal - displays full details of the selected part in a modal.
 * @param {Object} part - The selected part object (expects name, image, etc)
 * @param {Function} onClose - function to close the modal
 * @param {Function} onAddToCart - optional: add this part to cart
 */
function ProductDetailModal({ part, onClose, onAddToCart }) {
  if (!part) return null;

  const { name, image, price, description } = part;
  const placeholder = 'https://via.placeholder.com/160x160?text=No+Image';

  const handleAddToCart = () => {
    if (typeof onAddToCart === 'function') {
      onAddToCart(part);
    }
  };

  return (
    <Modal isOpen={!!part} onClose={onClose}>
      <div className="product-detail-modal-content" style={{
        textAlign: 'center',
        minWidth: 290,
        padding: '8px 8px 22px 8px'
      }}>
        {image ? (
          <img
            src={image}
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
        ) : (
          <div
            style={{
              width: 160,
              height: 160,
              background: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '9px',
              margin: '0 auto 18px auto',
              border: '1px solid #dadada',
              userSelect: 'none'
            }}
            aria-label="No image available"
            data-testid="product-detail-modal-image-placeholder"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true" style={{ marginBottom: 5 }}>
              <rect x="6" y="15" width="48" height="30" rx="9" fill="#bbbbbb" />
              <circle cx="23" cy="30" r="8" fill="#dedede" />
              <rect x="32" y="26" width="17" height="13" rx="4" fill="#dedede" />
            </svg>
            <span style={{ color: '#969696', marginTop: 2, fontSize: 15, fontWeight: 500 }}>No Image Available</span>
          </div>
        )}
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
        {onAddToCart && (
          <button
            className="btn"
            type="button"
            onClick={handleAddToCart}
            style={{ marginBottom: 14, minWidth: 120, fontSize: '1.04rem' }}
          >
            Add to Cart
          </button>
        )}
        <button className="btn" type="button" onClick={onClose} style={{ marginTop: 8 }}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ProductDetailModal;
