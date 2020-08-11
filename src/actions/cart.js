import {  CART_ADD, CART_REMOVE, CART_UPDATE } from "../constans/ActionTypes";

export const addCart = (product, quantity) => ({
    type: CART_ADD,
    product,
    quantity
})

export const removeCart = (id) => ({
    type: CART_REMOVE,
    id,
})

export const updateCart = (product, quantity) => ({
    type: CART_UPDATE,
    product,
    quantity
})
