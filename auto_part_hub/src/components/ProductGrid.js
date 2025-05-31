import React from "react";
import ProductCard from "./ProductCard";

/**
 * PUBLIC_INTERFACE
 * ProductGrid component displays a grid of ProductCards.
 */
const ProductGrid = () => {
  // Placeholder: Sample product list
  const sampleProducts = [
    { id: 1, name: "Brake Pads", price: 40, image: "" },
    { id: 2, name: "Engine Oil", price: 25, image: "" },
    { id: 3, name: "Suspension Strut", price: 110, image: "" }
  ];

  return (
    <section className="product-grid" style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "24px", padding: "24px" }}>
      {sampleProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;
