import React from "react";

/**
 * PUBLIC_INTERFACE
 * Navbar component for AutoPartHub.
 * Fixed at the top; includes logo, search bar, user/account icon, and cart access.
 */
const Navbar = ({ navigate }) => {
  return (
    <nav className="navbar">
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate && navigate("/")}
        >
          <span className="logo-symbol">*</span> AutoPartHub
        </div>
        <input type="text" className="navbar-search" placeholder="Search parts..." style={{
          margin: "0 16px",
          padding: "6px 12px",
          borderRadius: "4px",
          border: "1px solid #BDBDBD",
          fontSize: "1rem",
          background: "#222",
          color: "#fff"
        }} />
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            className="btn"
            title="Cart"
            onClick={() => navigate && navigate("/cart")}
          >
            <span role="img" aria-label="cart">🛒</span>
          </button>
          <button
            className="btn"
            title="Account"
            onClick={() => navigate && navigate("/account")}
          >
            <span role="img" aria-label="account">👤</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
