import React from "react";

/**
 * PUBLIC_INTERFACE
 * ProductCard displays thumbnail, name, price, and quick actions for a product.
 */
const ProductCard = ({ product, onView, navigate }) => {
  const handleView = () => {
    // prefer onView if supplied, else route to product details page
    if (onView) {
      onView(product);
    } else if (navigate) {
      navigate(`/product/${product.id}`);
    }
  };
  return (
    <div
      className="product-card"
      style={{
        background: "#343434",
        borderRadius: 10,
        padding: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        minHeight: 170,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer"
      }}
      tabIndex={0}
      onClick={handleView}
      onKeyPress={e => (e.key === "Enter" || e.key === " ") && handleView()}
      aria-label={`View details for ${product.name}`}
    >
      <div className="product-image" style={{ width: 80, height: 80, borderRadius: 4, background: "#757575", marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#BDBDBD" }}>
        {product.image ? <img src={product.image} alt={product.name} style={{ maxWidth: "100%", maxHeight: "100%" }} /> : <span>🛠️</span>}
      </div>
      <div className="product-name" style={{ fontWeight: 600, color: "#fff", textAlign: "center" }}>{product.name}</div>
      <div className="product-price" style={{ color: "#BDBDBD", fontSize: "1.1rem", margin: "6px 0" }}>${product.price}</div>
      <button
        className="btn"
        style={{ marginTop: 8 }}
        onClick={e => { e.stopPropagation(); handleView(); }}
      >
        View
      </button>
    </div>
  );
};

export default ProductCard;
