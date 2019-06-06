import ActionTypes from "./ActionTypes";

export const onToggleCart = expanded => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.TOGGLE_CART,
            payload: expanded
        });
    };
};
