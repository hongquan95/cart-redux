/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function CartResult() {
    return (
        <tr>
            <td colSpan={3} />
            <td>
                <h4>
                    <strong>Bill</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>15$</strong>
                </h4>
            </td>
            <td colSpan={3}>
                <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                            <i className="fa fa-angle-right right" />
                </button>
            </td>
        </tr>
    );
}

export default CartResult;
