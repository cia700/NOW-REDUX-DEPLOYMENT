import ActionTypes from "../actions/ActionTypes";

export const uiReducers = (
    state = {
        toggleNavigation: false,
        breadcrumbPath: [],
        toggleCart: false
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_CART: {
            return {
                ...state,
                toggleCart: action.payload
            };
        }
    }

    return state;
};
