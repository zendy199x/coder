import * as Message from './../constants/Message';
import * as Types from './../constants/ActionType';

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].product.id === product.id) {
                    index = -1;
                    break;
                }
            }
        }
    return index;
}

export default message;