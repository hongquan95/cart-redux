import product from './product'
import cart from './cart'
import message from './message'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    product,
    cart,
    message
})
export default rootReducer
