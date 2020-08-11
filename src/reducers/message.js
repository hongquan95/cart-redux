import * as messages from '../constans/Messages';
import { MESSAGE_CHANGE } from '../constans/ActionTypes';
const initialState = messages.MESSAGE_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_CHANGE:
            return action.message
        default:
            return state
    }
}
export default message
