import React from 'react';
import styles from './styles.scss';

export default class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.category}>
              {this.props.value}
            </div>    
        );
    }
}