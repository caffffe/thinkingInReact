import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import ProductPage from '../ProductPage';
import Product from "../../modules/Product";

const product = new Product();
const store = createStore(product.reducer);
product.setStore(store);
global.product = product;
console.log(product.store.getState())
export default function App({}) {
  return(
      <Provider store = {store}>
        <ProductPage
          filteredProducts={product.filteredProducts}
          electronicsProducts={product.electronicsProducts}
          sportProducts={product.sportProducts}
          search={product.search}
        />
      </Provider>    
  );
}
