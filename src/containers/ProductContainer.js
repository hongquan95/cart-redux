/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';
import { addCart } from '../actions/cart';
import { changeMessage } from '../actions/message';


function ProductContainer(props) {
    const getList = () => {
        const listProduct = props.productList 
        if (!listProduct.length)  {
            return '';
        }
        return listProduct.map((ele, index) => 
            <ProductItem
                key={ele.id}
                product={ele}
                addCart={props.addCart}
                changeMessage={props.changeMessage}
            />)
    }

    return (
        <ProductList>
            {getList()}
        </ProductList>
    );
}

ProductContainer.propTypes = {
    productList: PropTypes.array
}

const mapStateToProps = (state) => ({
    productList: state.product
})

const mapDispatchToProps = dispatch => ({
    addCart: (product, quantity) => dispatch(addCart(product, quantity)),
    changeMessage: (mess) => dispatch(changeMessage(mess))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
