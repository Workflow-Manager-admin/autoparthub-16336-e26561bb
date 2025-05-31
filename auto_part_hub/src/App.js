import React from 'react';
import './App.css';

// Import new scaffolded components
import Navbar from './components/Navbar';
import SidebarFilters from './components/SidebarFilters';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderTracking from './components/OrderTracking';
import UserAccount from './components/UserAccount';

// NOTE: Placeholder state/logic.
// In future iteration, routing/modal/cart/account state logic will be integrated.
// For scaffolding, statically render layout with sidebar and grid.

function App() {
  const [showProductDetail, setShowProductDetail] = React.useState(false);

  return (
    <div className="app" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 70, // accommodate navbar height
        flex: 1,
        minHeight: 0
      }}>
        <SidebarFilters />
        <main style={{ flex: 1, minHeight: "calc(100vh - 70px)", padding: 0 }}>
          {/* Product grid and detail modal area */}
          <ProductGrid />
        </main>
      </div>
      {/* Modal scaffold example (static, not interactive) */}
      <ProductDetailModal isOpen={false} product={null} onClose={() => setShowProductDetail(false)} />
      {/* Below components are rendered for demonstration, would be routed or conditionally rendered in real app */}
      <div className="app-demo-panels" style={{ display: "none" }}>
        <Cart />
        <Checkout />
        <OrderTracking />
        <UserAccount />
      </div>
    </div>
  );
}

export default App;