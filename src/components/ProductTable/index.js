import React from 'react';
import ProductRow from '../ProductRow';
import ProductCategoryRow from '../ProductCategoryRow';
import styles from './styles.scss';

export default class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.electronicsProducts)
        return (
            <div className={styles.root}>
                <div className={styles.title}>
                  <div className={styles.name}>
                    Name
                  </div>
                  <div className={styles.price}>
                   Price
                  </div>  
                </div>
                <ProductCategoryRow value={this.props.electronicsProducts[0].category}/>
                {
                  this.props.electronicsProducts.map((product, idx) => (
                    <ProductRow
                      name={product.name}
                      price={product.price}
                      key={idx}
                    />
                  ))
                }
                 <ProductCategoryRow value={this.props.sportProducts[0].category}/>
                {
                  this.props.sportProducts.map((product, idx) => (
                    <ProductRow
                      name={product.name}
                      price={product.price}
                      key={idx}
                    />
                  ))
                }
            </div>    
        );
    }
}