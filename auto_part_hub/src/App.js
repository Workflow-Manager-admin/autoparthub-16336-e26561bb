import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SidebarFilters from './components/SidebarFilters';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderTracking from './components/OrderTracking';
import UserAccount from './components/UserAccount';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation
} from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Main App component with routing for AutoPartHub.
 */
function App() {
  // Modal state for product detail modal (used only on catalog route)
  const [modalProduct, setModalProduct] = React.useState(null);
  const [navigate, setNavigate] = React.useState(null);

  // Binder to provide navigate once Router context is available
  function NavigationBinder({ setNavigate }) {
    const nav = useNavigate();
    React.useEffect(() => setNavigate(() => nav), [nav, setNavigate]);
    return null;
  }

  // Product grid "view" handler for modal open
  const handleProductView = (product) => setModalProduct(product);
  const handleModalClose = () => setModalProduct(null);

  // Main layout container
  return (
    <Router>
      {/* Provides navigate to the rest of the app through state */}
      <NavigationBinder setNavigate={setNavigate} />
      <div className="app" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar navigate={navigate}/>
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
                    navigate={navigate}
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
                element={<Cart />}
              />
              {/* Checkout page */}
              <Route
                path="/checkout"
                element={<Checkout />}
              />
              {/* Orders/Order Tracking */}
              <Route
                path="/orders"
                element={<OrderTracking />}
              />
              {/* User account/profile */}
              <Route
                path="/account"
                element={<UserAccount />}
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
  // For demo, show modal in-page; in real app fetch product by id param (can parse id from location).
  return (
    <ProductDetailModal
      isOpen={true}
      product={null}
      // Use navigate(-1) to go back in history; fallback to window.history if needed
      onClose={() => (window.history.length > 1 ? window.history.back() : window.location.assign('/'))}
    />
  );
}

export default App;
