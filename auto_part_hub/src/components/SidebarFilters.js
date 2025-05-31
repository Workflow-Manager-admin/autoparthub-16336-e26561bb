import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * SidebarFilters component provides rich filtering UI for the ProductGrid.
 * Includes category, brand, price range, and in-stock availability filters.
 */
const CATEGORIES = [
  "Brakes",
  "Engine",
  "Suspension",
  "Drivetrain",
  "Electrical",
  "Engine Cooling",
  "Fuel System",
  "Body/Electrical"
];

const BRANDS = [
  "PremiumParts",
  "QuickFit",
  "OEMPro",
  "AutoGenix",
  "DriveMax"
];

const PRICE_RANGE = {
  min: 0,
  max: 250
};

const SidebarFilters = () => {
  // Local UI state (for demonstration, usually lifted up)
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [price, setPrice] = useState(PRICE_RANGE.max);
  const [inStockOnly, setInStockOnly] = useState(false);

  // PUBLIC_INTERFACE
  // Toggle a category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // PUBLIC_INTERFACE
  // Toggle a brand selection (multi-select)
  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  // PUBLIC_INTERFACE
  // Reset all filters to initial values
  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPrice(PRICE_RANGE.max);
    setInStockOnly(false);
  };

  return (
    <aside className="sidebar-filters" style={{
      minWidth: 220,
      maxWidth: 280,
      padding: "28px 18px 28px 16px",
      background: "#424242",
      color: "#fff",
      borderRight: "1px solid #757575",
      boxShadow: "2px 0 0 0 #f5f5f5"
    }}>
      <h3 style={{ marginTop: 0 }}>Filters</h3>
      {/* Category Filter */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 520, fontSize: "1.02rem", color: "#BDBDBD", marginBottom: 5 }}>
          Category
        </div>
        <div>
          {CATEGORIES.map(category => (
            <label key={category} style={{
              display: "flex", alignItems: "center", marginBottom: 2, cursor: "pointer"
            }}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                style={{ marginRight: 7 }}
              />
              {category}
            </label>
          ))}
        </div>
      </div>
      {/* Brand Multi-Select */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 520, fontSize: "1.02rem", color: "#BDBDBD", marginBottom: 5 }}>
          Brand
        </div>
        <div>
          {BRANDS.map(brand => (
            <label key={brand} style={{
              display: "flex", alignItems: "center", marginBottom: 2, cursor: "pointer"
            }}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                style={{ marginRight: 7 }}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
      {/* Price Range */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 520, fontSize: "1.02rem", color: "#BDBDBD", marginBottom: 3 }}>
          Price (up to ${price})
        </div>
        <input
          type="range"
          min={PRICE_RANGE.min}
          max={PRICE_RANGE.max}
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#BDBDBD" }}
        />
        <div style={{ fontSize: 13, marginTop: 2, color: "#ccc" }}>
          {PRICE_RANGE.min} &mdash; {PRICE_RANGE.max}
        </div>
      </div>
      {/* In-stock Only */}
      <div style={{ marginBottom: 28 }}>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer", fontWeight: 510, color: "#BDBDBD" }}>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={e => setInStockOnly(e.target.checked)}
            style={{ marginRight: 7 }}
          />
          In Stock Only
        </label>
      </div>
      <button
        className="btn"
        onClick={handleReset}
        style={{
          background: "#BDBDBD",
          color: "#424242",
          width: "100%",
          fontWeight: 600,
          padding: "7px 0",
          border: "none",
          borderRadius: 4,
          fontSize: "1rem",
          marginTop: 3
        }}
        type="button"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default SidebarFilters;
