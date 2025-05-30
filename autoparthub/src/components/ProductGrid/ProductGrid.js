import React from 'react';
import ProductCard from './ProductCard';

/**
 * PUBLIC_INTERFACE
 * ProductGrid: renders a grid of ProductCards with click support and optional add-to-cart.
 */
function ProductGrid({ parts = [], onPartClick, onAddToCart }) {
  return (
    <section className="product-grid" aria-label="Spare Parts">
      {parts && parts.length > 0 ? (
        <div className="product-grid-list">
          {parts.map((part, idx) => (
            <ProductCard
              key={part.name + idx}
              name={part.name}
              image={part.image}
              price={part.price}
              description={part.description}
              onClick={() => {
                // Pass full part object to onPartClick, if provided
                if (typeof onPartClick === 'function') onPartClick(part);
              }}
              onAddToCart={onAddToCart ? () => onAddToCart(part) : undefined}
            />
          ))}
        </div>
      ) : (
        <div className="product-grid-empty">No parts available.</div>
      )}
    </section>
  );
}

export default ProductGrid;
