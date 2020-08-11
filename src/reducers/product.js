import * as types from '../constans/ActionTypes'

const inititalState = [
    {
        id: 1,
        name: 'Iphone 11',
        price: 100,
        inventory: 500,
        rate: 4,
        image: 'https://www.techinn.com/f/13735/137354153/apple-iphone-11-64gb-6.1.jpg'
    },
    {
        id: 2,
        name: 'Iphone 11 Pro',
        price: 500,
        inventory: 500,
        rate: 2,
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946'
    },
    {
        id: 3,
        name: 'Samsung Galaxy',
        price: 2900,
        inventory: 500,
        rate: 1,
        image: 'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-white-600x600.jpg'
    },
]
const product = (state = inititalState, action) => {
    switch (action.type) {
        case types.PRODUCT_LIST:
            return [...state]
        default:
            return state
    }
}
export default product
