import {  MESSAGE_CHANGE } from "../constans/ActionTypes";

export const changeMessage = (message) => ({
    type: MESSAGE_CHANGE,
    message,
})
