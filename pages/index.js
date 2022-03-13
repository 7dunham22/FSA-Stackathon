import { AllProducts, NewProduct, ProductTreemap } from '../components';
import React from 'react';

const AdminView = () => {
  return (
    <div id="admin-view">
      <h1>Marketplace Analytics</h1>
      <div id="admin-products-display">
        <AllProducts />
        <NewProduct />
      </div>
      <ProductTreemap />
    </div>
  );
};

export default AdminView;
