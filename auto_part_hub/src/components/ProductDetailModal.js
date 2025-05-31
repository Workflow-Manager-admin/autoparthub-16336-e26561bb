import React from "react";

/**
 * PUBLIC_INTERFACE
 * ProductDetailModal shows details for a product in a modal window.
 */
const ProductDetailModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  // Utility for stars (up to 5, supports half-star)
  const renderStars = rating => {
    if (!rating && rating !== 0) return null;
    const rounded = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(rounded);
    const halfStar = rounded - fullStars >= 0.5;
    return (
      <span style={{ color: "#FFB02E", fontSize: "1.1em", marginLeft: 4 }}>
        {"★".repeat(fullStars)}
        {halfStar ? "½" : ""}
        {"☆".repeat(5 - fullStars - (halfStar ? 1 : 0))}
      </span>
    );
  };

  // Compatibility list rendering for cars
  const renderCompatibility = cars =>
    Array.isArray(cars) && cars.length > 0
      ? (
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          {cars.map((c, i) => <li key={i} style={{ fontSize: 14, color: "#aaa", marginBottom: 2 }}>{c}</li>)}
        </ul>
      )
      : <span style={{ color: "#979797", fontSize: 14 }}>Not specified</span>;

  return (
    <div className="modal-overlay" style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.6)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div className="modal-content" style={{
        background: "#232323",
        borderRadius: 12,
        padding: 32,
        minWidth: 300,
        color: "#fff",
        maxWidth: 510,
        boxSizing: "border-box"
      }}>
        {/* Images carousel/stack */}
        {product.images && product.images.length > 0 && (
          <div style={{ display: "flex", gap: 9, marginBottom: 10, flexWrap: "wrap" }}>
            {product.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${product.name} ${idx + 1}`}
                style={{
                  width: 72,
                  height: 72,
                  objectFit: "cover",
                  borderRadius: 6,
                  border: "1px solid #333",
                  background: "#ccc"
                }}
              />
            ))}
          </div>
        )}
        <h2 style={{ marginTop: 0, marginBottom: 8 }}>{product.name}</h2>
        {/* Manufacturer, part number */}
        <div style={{ color: "#BDBDBD", fontSize: 15, marginBottom: 4 }}>
          {product.manufacturer && <span>{product.manufacturer}</span>}
          {product.partNumber && <span style={{ marginLeft: 8, fontSize: 14, color: "#bdbdbd" }}>&bull; {product.partNumber}</span>}
        </div>
        {/* Price and in-stock/stock badge */}
        <div style={{ color: "#FFB02E", fontSize: 18, fontWeight: 600, marginBottom: 4 }}>
          ${product.price}
          {product.inStock === false && (
            <span style={{ color: "#b71c1c", background: "#fff2f2", marginLeft: 10, fontWeight: 500, fontSize: 14, padding: "2px 8px", borderRadius: 15 }}>Out of Stock</span>
          )}
        </div>
        {/* Ratings and reviews */}
        {(product.ratings || product.totalReviews) &&
          <div style={{ color: "#FFB02E", fontSize: 15, marginBottom: 4 }}>
            {renderStars(product.ratings)}{" "}
            <span style={{ color: "#ccc", fontSize: 14 }}>
              {product.ratings ? product.ratings.toFixed(1) : "—"} ({product.totalReviews || 0} reviews)
            </span>
          </div>
        }
        {/* Description */}
        <div style={{ margin: "7px 0", color: "#DDD", fontSize: 15 }}>{product.description}</div>
        {/* Specifications */}
        <div style={{ margin: "8px 0" }}>
          <span style={{ fontWeight: 600, color: "#BDBDBD", fontSize: 15 }}>Specifications:&nbsp;</span>
          <span style={{ color: "#ccc", fontSize: 14 }}>{product.specifications || <span style={{ color: "#979797" }}>-</span>}</span>
        </div>
        {/* Compatibility */}
        <div style={{ margin: "7px 0" }}>
          <span style={{ fontWeight: 600, color: "#BDBDBD", fontSize: 15 }}>Compatibility:&nbsp;</span>
          {renderCompatibility(product.compatibility)}
        </div>
        {/* Warranty */}
        {product.warranty &&
          <div style={{ margin: "7px 0" }}>
            <span style={{ fontWeight: 600, color: "#BDBDBD", fontSize: 15 }}>Warranty:&nbsp;</span>
            <span style={{ color: "#ccc", fontSize: 14 }}>{product.warranty}</span>
          </div>
        }
        {/* Category */}
        <div style={{ margin: "7px 0" }}>
          <span style={{ fontWeight: 600, color: "#BDBDBD", fontSize: 15 }}>Category:&nbsp;</span>
          <span style={{ color: "#bbb", fontSize: 14 }}>{product.category}</span>
        </div>

        {/* Modal Actions */}
        <button className="btn" onClick={onClose} style={{ marginTop: 24 }}>Close</button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
