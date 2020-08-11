/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import Cart from '../components/Cart';
import CartResult from '../components/CartResult';
import PropTypes from 'prop-types';
import { removeCart, updateCart } from '../actions/cart';
import { changeMessage } from '../actions/message'

function CartContainer(props) {
    const listCart = props.cart;
    const showList = () => {
        if (listCart.length > 0) {
            return listCart.map((ele, index) =>
                <CartItem
                    key={index}
                    cart={ele}
                    removeCart={props.removeCart}
                    changeMessage={props.changeMessage}
                    updateQuantityCart={props.updateQuantityCart}
                />)
        }
        return null;
    }
    const showCart = () => {
        if (!listCart.length) return null;
        return <CartResult cart={listCart}/>
    }
    return (
        <Cart>
            {showList()}
            {showCart()}
        </Cart>
    );
}
const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    removeCart: (id) => dispatch(removeCart(id)),
    changeMessage: (mess) => dispatch(changeMessage(mess)),
    updateQuantityCart: (product, quantity) => dispatch(updateCart(product, quantity))
})

CartItem.propTypes = {
    cart: PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
