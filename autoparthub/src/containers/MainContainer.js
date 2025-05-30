import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import SidebarFilter from '../components/SidebarFilter/SidebarFilter';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import ProductDetailModal from '../components/ProductDetailModal/ProductDetailModal';
import Checkout from '../components/Checkout/Checkout';
import OrderTracking from '../components/OrderTracking/OrderTracking';
import UserAccount from '../components/UserAccount/UserAccount';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';

// PUBLIC_INTERFACE
function MainContainer() {
  // TODO: Manage layout/routing, global app state, and feature composition
  return (
    <div>
      <NavigationBar />
      <SidebarFilter />
      <ProductGrid />
      <ShoppingCart />
      <ProductDetailModal />
      <Checkout />
      <OrderTracking />
      <UserAccount />
      <Loader />
      <Modal isOpen={false}></Modal>
    </div>
  );
}

export default MainContainer;
