import { combineReducers } from 'redux';
import data from './data.json';

const productRowData = JSON.parse(JSON.stringify(data));
export function productReducer(state = productRowData, action) {
  switch(action.type) {
      case 'add': {
        return Object.assign({}, state, item);
      }
      default: {
          return state;
      }
  }
}
export function searchFilterReducer(state = '', action) {
  switch(action.type) {
      case 'updateSearch': {
        console.log(action.value);
        return action.value;
      }
      default: {
          console.log('state',state);
          return state;
      }
  }
}
export function stockFilterReducer(state = false, action) {
  switch(action.type) {
      case 'updateStock': {
        return action.value;
      }
      default: {
          return state;
      }
  }
}

export default combineReducers({
  products: productReducer,
  searchString: searchFilterReducer,
  stock: stockFilterReducer,
});
