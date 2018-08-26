import React from 'react';
import styles from './styles.scss';

export default function ProductRow({ name, price }) {
    return (
        <div>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>{price}</span>
        </div>
    );
}