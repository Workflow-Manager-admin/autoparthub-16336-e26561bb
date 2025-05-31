import React from "react";

/**
 * PUBLIC_INTERFACE
 * ProductCard displays thumbnail, name, price, and quick actions for a product.
 */
const ProductCard = ({ product, onView, navigate }) => {
  const handleView = () => {
    if (onView) {
      onView(product);
    } else if (navigate) {
      navigate(`/product/${product.id}`);
    }
  };

  // Utility for showing stars, e.g., 4.6 => ★★★★☆
  const renderStars = rating => {
    if (!rating && rating !== 0) return null;
    const rounded = Math.round(rating * 2) / 2; // nearest 0.5
    const fullStars = Math.floor(rounded);
    const halfStar = rounded - fullStars >= 0.5;
    return (
      <span style={{ color: "#FFB02E", fontSize: 14, marginLeft: 3 }}>
        {"★".repeat(fullStars)}
        {halfStar ? "½" : ""}
        {"☆".repeat(5 - fullStars - (halfStar ? 1 : 0))}
      </span>
    );
  };

  return (
    <div
      className="product-card"
      style={{
        background: "#343434",
        borderRadius: 10,
        padding: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        minHeight: 200,
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
        {product.images && product.images.length > 0
          ? <img src={product.images[0]} alt={product.name} style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: 4 }} />
          : <span>🛠️</span>}
      </div>
      <div className="product-name" style={{ fontWeight: 600, color: "#fff", textAlign: "center", marginBottom: 1 }}>{product.name}</div>
      <div style={{ color: "#BDBDBD", fontSize: 13, marginBottom: 2 }}>
        {product.manufacturer} &bull; {product.partNumber}
      </div>
      <div className="product-price" style={{ color: "#BDBDBD", fontSize: "1.1rem", margin: "3px 0 4px 0" }}>${product.price}</div>
      {product.ratings && (
        <div style={{ color: "#ccc", fontSize: 13, marginBottom: 1 }}>
          {renderStars(product.ratings)}{" "}
          <span style={{ fontSize: 13, color: "#888" }} title={product.totalReviews + " reviews"}>
            ({product.totalReviews || 0})
          </span>
        </div>
      )}
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
