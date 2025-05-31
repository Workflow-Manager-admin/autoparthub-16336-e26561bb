import React from "react";

/**
 * PUBLIC_INTERFACE
 * SidebarFilters component provides filtering options for ProductGrid (by type, price, manufacturer, etc).
 */
const SidebarFilters = () => {
  return (
    <aside className="sidebar-filters" style={{ minWidth: 220, padding: "24px 12px", background: "#424242", color: "#fff" }}>
      <h3 style={{ marginTop: 0 }}>Filters</h3>
      <div>
        <label>
          <input type="checkbox" />
          Brakes
        </label>
        <br />
        <label>
          <input type="checkbox" />
          Engine
        </label>
        <br />
        <label>
          <input type="checkbox" />
          Suspension
        </label>
      </div>
      <div style={{ marginTop: 16 }}>
        <label>
          Price Range<br />
          <input type="range" min={0} max={1000} />
        </label>
      </div>
      {/* Add more filter options as needed */}
    </aside>
  );
};

export default SidebarFilters;
