/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Message({message}) {
    return (
        <h3>
            <span className="badge amber darken-2">{ message }</span>
        </h3>
    );
}

export default Message;
