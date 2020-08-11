/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';

function MessageContainer(props) {
    return (
        <Message message={props.message}/>
    );
}
const mapStateToProps = (state) => ({
    message: state.message
})

export default connect(mapStateToProps, null)(MessageContainer);
