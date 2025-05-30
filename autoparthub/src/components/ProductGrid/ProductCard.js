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
        <img
          src={image || placeholder}
          alt={name}
          className="product-card-image"
          onError={(e) => { e.target.onerror = null; e.target.src = placeholder; }}
        />
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
