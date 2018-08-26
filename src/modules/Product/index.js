import { createSelector } from 'reselect'
import reducer from './reducer';

export const CATEGORY = {
    ELECTRONICS: 'Electronics',
    SPORT: 'Sporting Goods'
}

export default class Product {
    constructor() {
        this.reducer = reducer;
    }
    setStore(store) {
        if (this.store) {
            return;
        }
        this.store = store;
        this.filterProducts = createSelector(
            (state) => state.searchString,
            (state) => state.stock,
            (searchString, stock) => {
              console.log('trigger');  
              if (searchString === undefined && stock === undefined) {
                  return;
              }
              console.log('searchstring',searchString);
              console.log(stock);
              console.log(this.products);
              return this.products.filter((product) => (
                (product.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1)
                // && product.stocked === stock
              ))
            },
          );
    }
    addItem(item) {
      this.store.dispatch({
        type: 'add',
        item
      });
    }

    search = (searchValue) => {
        console.log(this)
        console.log(this.store);
        this.store.dispatch({
            type: 'updateSearch',
            value: searchValue,
        })
    }
    toggleStock() {
        this.store.dispatch({
            type: 'updateStoke',
            value: !this.state.stock,
        })
    }
    _getState() {
        return this.store.getState();
    }
    get state() {
        return this._getState();
    }
    get products() {
        return this.state && this.state.products;
    }
    get searchString() {
        return this.state && this.state.searchString;
    }
    get stock() {
        return this.state && this.state.stock;
    }
    get filteredProducts() {
        return this.filterProducts(this.state);
    }
    get electronicsProducts() {
        return this.filteredProducts.filter((product) => (product.category === CATEGORY.ELECTRONICS));
    }
    get sportProducts() {
        return this.filteredProducts.filter((product) => (product.category === CATEGORY.SPORT));
    }

}

