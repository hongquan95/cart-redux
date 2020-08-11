import * as types from '../constans/ActionTypes';
import _ from 'lodash'
var cartArr = JSON.parse(localStorage.getItem('CART'));
const initialState = cartArr ? cartArr : [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CART_ADD:
            let cart = addCart(state, action.product, action.quantity);
            localStorage.setItem('CART', JSON.stringify(cart));
            return cart
        case types.CART_REMOVE:
            let removeIndex = _.findIndex(state, (item) => (item.product.id == action.id));
            if (removeIndex == -1) return state;
            let newArr = [...state.slice(0, removeIndex), ...state.slice(removeIndex + 1, state.length)]
            localStorage.setItem('CART', JSON.stringify(newArr));
            return newArr;
        case types.CART_UPDATE:
            let updateIndex = _.findIndex(state, (item) => (item.product.id == action.product.id));
            if (updateIndex == -1) return state;
            let updatedArr = [
                    ...state.slice(0, updateIndex),
                    { product: action.product, quantity: action.quantity },
                    ...state.slice(updateIndex + 1, state.length)
                ]
            localStorage.setItem('CART', JSON.stringify(updatedArr));
            return updatedArr
        default:
            return state
    }
}
const addCart = (cart, product, quantity) => {
    let index = _.findIndex(cart, (item) => (item.product.id == product.id));
    return index > -1 ?
        [...cart.slice(0, index), { ...cart[index], quantity: cart[index].quantity + quantity }, ...cart.slice(index + 1, cart.length)] :
        [{ product, quantity }, ...cart]
}
export default cartReducer
