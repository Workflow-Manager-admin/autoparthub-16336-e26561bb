import React from "react";

/**
 * PUBLIC_INTERFACE
 * ProductDetailModal shows details for a product in a modal window.
 */
const ProductDetailModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.6)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div className="modal-content" style={{
        background: "#232323", borderRadius: 12, padding: 32, minWidth: 300, color: "#fff", maxWidth: 500
      }}>
        <h2>{product?.name || "Product Name"}</h2>
        <p>Description and data for selected product here...</p>
        <button className="btn" onClick={onClose} style={{ marginTop: 24 }}>Close</button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
