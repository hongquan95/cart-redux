/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ProductItem from './ProductItem';

function ProductList() {
    return (
        <div className="row">
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    );
}

export default ProductList;
