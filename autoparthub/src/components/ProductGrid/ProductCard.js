import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ProductCard: displays a car part card, calls onClick with part data when clicked.
 * Now supports price and description display, and optional add-to-cart action.
 */
function ProductCard({ name, image, price, description, onClick, onAddToCart }) {
  const placeholder =
    'https://via.placeholder.com/120x120?text=No+Image';

  const handleClick = () => {
    // If click handler is provided, call it with part data (view details).
    if (typeof onClick === 'function') {
      onClick({ name, image, price, description });
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card 'open details'
    if (typeof onAddToCart === 'function') {
      onAddToCart({ name, image, price, description });
    }
  };

  return (
    <div
      className="product-card"
      tabIndex={0}
      role="button"
      onClick={handleClick}
      onKeyPress={(e) => {
        // Basic accessibility: Enter/Space triggers click
        if (e.key === 'Enter' || e.key === ' ') handleClick();
      }}
      style={{ cursor: 'pointer' }}
      aria-label={`View details for ${name}`}
    >
      <div className="product-card-image-wrap">
        {image ? (
          <img
            src={image}
            alt={name}
            className="product-card-image"
            onError={(e) => { e.target.onerror = null; e.target.src = placeholder; }}
          />
        ) : (
          // Placeholder: gray box with icon & "No Image"
          <div
            style={{
              width: 112,
              height: 112,
              background: '#e0e0e0',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#bdbdbd',
              fontSize: 22,
              fontWeight: 600,
              textAlign: 'center',
              position: 'relative',
              border: '1px solid #dadada',
              userSelect: 'none'
            }}
            aria-label="No image available"
            data-testid="product-card-image-placeholder"
          >
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true" style={{ marginBottom: 5 }}>
              <rect x="4" y="8" width="28" height="20" rx="5" fill="#bbbbbb" />
              <circle cx="13" cy="18" r="3.5" fill="#dedede" />
              <rect x="17" y="15" width="10" height="7" rx="2" fill="#dedede" />
            </svg>
            <span style={{ fontSize: 13, color: '#969696' }}>No Image</span>
          </div>
        )}
      </div>
      <div className="product-card-details">
        <div className="product-card-name">{name}</div>
        <div className="product-card-price">${price != null ? price.toFixed(2) : '—'}</div>
        <div className="product-card-description">{description}</div>
        {/* Add to Cart button */}
        {onAddToCart && (
          <button
            className="btn"
            type="button"
            style={{ marginTop: 10, width: '96%', fontSize: '0.98rem' }}
            onClick={handleAddToCart}
            tabIndex={0}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
