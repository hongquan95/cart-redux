/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

function Cart() {
    return (
        <div className="table-responsive">
            <table className="table product-table">
                <thead>
                    <tr>
                        <th />
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartResult/>
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
