import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ProductCard: displays a car part card and calls onClick with part data when clicked.
 */
function ProductCard({ name, image, onClick }) {
  const placeholder =
    'https://via.placeholder.com/120x120?text=No+Image';

  const handleClick = () => {
    // If click handler is provided, call it with part data.
    if (typeof onClick === 'function') {
      onClick({ name, image });
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
      <div className="product-card-name">{name}</div>
    </div>
  );
}

export default ProductCard;
