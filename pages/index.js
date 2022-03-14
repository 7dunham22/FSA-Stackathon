import { AllProducts, NewProduct, ProductTreemap } from '../components';
import React from 'react';
// import axios from 'axios';
// import Item from '../server/database/item';

// export async function getServerSideProps() {
//   // const { data: items } = await axios.get('api/items');
//   const items = await Item.findAll();
//   console.log('items: ', items);
//   return { props: { items } };
// }

const AdminView = () => {
  return (
    <div id="adminView">
      <h1>Marketplace Analytics</h1>
      <div id="adminProductsDisplay">
        <AllProducts />
        <NewProduct />
      </div>
      {/* <ProductTreemap /> */}
    </div>
  );
};

export default AdminView;
