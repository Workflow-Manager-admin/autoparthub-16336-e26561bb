import React from 'react';
import ProductCard from './ProductCard';

// PUBLIC_INTERFACE
function ProductGrid({ parts = [] }) {
  /**
   * Renders a grid of car part cards.
   * @param {Array} parts - array of car part objects with { name, image }
   */
  return (
    <section className="product-grid" aria-label="Spare Parts">
      {parts && parts.length > 0 ? (
        <div className="product-grid-list">
          {parts.map((part, idx) =>
            <ProductCard key={part.name + idx} name={part.name} image={part.image} />
          )}
        </div>
      ) : (
        <div className="product-grid-empty">No parts available.</div>
      )}
    </section>
  );
}

export default ProductGrid;
