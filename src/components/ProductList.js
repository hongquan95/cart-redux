/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function ProductList(props) {
    return (
        <div className="row">
            {props.children}
        </div>
    );
}

export default ProductList;
