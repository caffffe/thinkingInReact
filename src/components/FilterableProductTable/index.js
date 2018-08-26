import React from 'react';
import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.electronicsProducts)
        return (
            <div>
                <SearchBar
                  search={this.props.search}
                />
                <ProductTable
                    electronicsProducts={this.props.electronicsProducts}
                    sportProducts={this.props.sportProducts}
                />
            </div>    
        );
    }
}