import React from 'react';
import './App.css';

// Import react-router-dom and scaffolded components
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation
} from 'react-router-dom';

import Navbar from './components/Navbar';
import SidebarFilters from './components/SidebarFilters';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderTracking from './components/OrderTracking';
import UserAccount from './components/UserAccount';

/**
 * PUBLIC_INTERFACE
 * Main App component with routing for AutoPartHub.
 */
function App() {
  // Modal state for product detail modal (used only on catalog route)
  const [modalProduct, setModalProduct] = React.useState(null);

  // Product grid "view" handler for modal open
  const handleProductView = (product) => setModalProduct(product);
  const handleModalClose = () => setModalProduct(null);

  // Main layout container
  return (
    <Router>
      <div className="app" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar/>
        {/* Main content area below navbar */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 70, // accommodate navbar height
          flex: 1,
          minHeight: 0
        }}>
          <SidebarFilters/>
          <main style={{ flex: 1, minHeight: "calc(100vh - 70px)", padding: 0 }}>
            <Routes>
              {/* Catalog is default/home */}
              <Route
                path="/"
                element={
                  <ProductGrid
                    onProductView={handleProductView}
                  />
                }
              />
              {/* Modal page "overlay": /product/:id */}
              <Route
                path="/product/:id"
                element={
                  <ProductDetailPage />
                }
              />
              {/* Cart page */}
              <Route
                path="/cart"
                element={<Cart/>}
              />
              {/* Checkout page */}
              <Route
                path="/checkout"
                element={<Checkout/>}
              />
              {/* Orders/Order Tracking */}
              <Route
                path="/orders"
                element={<OrderTracking/>}
              />
              {/* User account/profile */}
              <Route
                path="/account"
                element={<UserAccount/>}
              />
            </Routes>
          </main>
        </div>
        {/* Render product detail modal only if modalProduct is active (opened from catalog grid) */}
        <ProductDetailModal
          isOpen={!!modalProduct}
          product={modalProduct}
          onClose={handleModalClose}
        />
      </div>
    </Router>
  );
}

/**
 * PUBLIC_INTERFACE
 * Dedicated product detail "page" for route /product/:id.
 * Will eventually load product by id; placeholder for now.
 */
function ProductDetailPage() {
  const location = useLocation();
  // For demo, show modal in-page; in real app fetch product by id param.
  return (
    <ProductDetailModal
      isOpen={true}
      product={null}
      onClose={() => window.history.back()}
    />
  );
}

export default App;