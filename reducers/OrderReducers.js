import ActionTypes from "../actions/ActionTypes";

export const Cart = (
    state = {
        products: []
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.UPDATE_CART: {
            return {
                ...state,
                products: action.payload
            };
        }
    }

    return state;
};

export const Order = (state = { checked: true, asGuest: true }, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_ORDER: {
            return {
                ...action.payload
            };
        }
    }

    return state;
};
