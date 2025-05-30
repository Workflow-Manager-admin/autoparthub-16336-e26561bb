import React from 'react';

// PUBLIC_INTERFACE
function ProductCard({ name, image }) {
  /**
   * Renders a single car part card with photo and name.
   * Falls back to a generic placeholder image if none is found.
   */
  const placeholder =
    'https://via.placeholder.com/120x120?text=No+Image';

  return (
    <div className="product-card">
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
