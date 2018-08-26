import React from 'react';
import { connect } from 'react-redux';
import FilterableProductTable from '../../components/FilterableProductTable';

function mapToProps(state, props) {
  return {
    sportProducts: props.sportProducts,
    electronicsProducts: props.electronicsProducts,
  };
}

function mapToFunc(dispatch, props) {
  return {
    search: (value) => {
      console.log(value)
      props.search(value);
    },
  };
}
const ProductPage = connect(
  mapToProps,
  mapToFunc
)(FilterableProductTable);

export default ProductPage; 
