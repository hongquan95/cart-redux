/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Cart(props) {
    return (
        <div className="table-responsive">
            <table className="table product-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {props.children}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
