/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { REMOVE_CART, UPDATE_CART } from '../constans/Messages'
function CartItem({cart, removeCart, changeMessage, updateQuantityCart}) {
    const showSubTotal = (cart) => (cart.product.price * cart.quantity + '$');
    const handleRemoveCart = () => {
        removeCart(cart.product.id);
        changeMessage(REMOVE_CART)
        setTimeout(() => {
            changeMessage('')
        }, 1000)
    }
    const handleChangeQuantity = (newQuantity) => {
        if (newQuantity >= 1) {
            updateQuantityCart(cart.product, newQuantity);
            changeMessage(UPDATE_CART)
            setTimeout(() => {
            changeMessage('')
            }, 1000)
        }
    }
    return (
        <tr>
            <th scope="row">
                <img src={cart.product.image} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{cart.product.name}</strong>
                </h5>
            </td>
            <td>{cart.product.price}</td>
            <td className="center-on-small-only">
                <span className="qty">{cart.quantity}{" "}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => handleChangeQuantity(cart.quantity - 1)}>
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => handleChangeQuantity(cart.quantity + 1)}>
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{showSubTotal(cart)}</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item" onClick={handleRemoveCart}>X</button>
            </td>
        </tr>
    );
}

export default CartItem;
