import React from 'react';
import styles from './styles.scss';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    onChange(e) {
        // console.log(e);
        // console.log(e.currentTarget.value);
        this.props.search(e.currentTarget.value);
    }
    render() {
        return (
            <div>
                <input  
                  type = "text"
                  className={styles.searchInput}
                  onChange={(e) => this.onChange(e)}
                />
            </div>    
        );
    }
}