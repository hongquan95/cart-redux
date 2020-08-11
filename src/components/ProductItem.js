/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { BUY_SUCCESS } from '../constans/Messages';

function ProductItem(props) {
    const { product } = props;
    const showRating = (num) => {
        var ele = [];
        for (let i = 0; i < num; i++) {
            ele.push(<li key={i}>
                        <i className="fa fa-star" />
                    </li>)
        }
        for (let i = 0; i < (5 - num); i++) {
            ele.push(<li key={i + 5}>
                        <i className="fa fa-star-o" />
                    </li>)
        }
        return ele;
    }
    const handleAddCart = () => {
        props.addCart(product, 1)
        props.changeMessage(BUY_SUCCESS)
        setTimeout(() => {
            props.changeMessage('')
        }, 2000)
    }
    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={ product.image } className="img-fluid" />
                    <a>
                        <div className="mask waves-light waves-effect waves-light" />
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a>{ product.name }</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        {showRating(product.rate)}
                    </ul>
                    <p className="card-text">
                </p>
                    <div className="card-footer">
                        <span className="left">{ product.price }$</span>
                        <span className="right">
                            <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart" onClick={handleAddCart}>
                                <i className="fa fa-shopping-cart" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
