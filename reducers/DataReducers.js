import ActionTypes from "../actions/ActionTypes";

export const Products = (
    state = {
        data: null,
        error: "",
        status: ""
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS_SUCCESS: {
            return {
                data: action.payload.data,
                error: "",
                status: action.payload.status
            };
        }
        case ActionTypes.FETCH_PRODUCTS_FAILURE: {
            return {
                data: null,
                error: action.error,
                status: "error"
            };
        }
    }

    return state;
};

export const Settings = (
    state = {
        data: null,
        error: "",
        status: ""
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.FETCH_SETTINGS_SUCCESS: {
            return {
                data: action.payload.data,
                error: "",
                status: action.payload.status
            };
        }
        case ActionTypes.FETCH_SETTINGS_FAILURE: {
            return {
                data: null,
                error: action.error,
                status: "error"
            };
        }
    }

    return state;
};

export const Pages = (
    state = {
        data: [],
        error: "",
        status: ""
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.FETCH_PAGES_SUCCESS: {
            return {
                data: action.payload.data,
                error: "",
                status: action.payload.status
            };
        }
        case ActionTypes.FETCH_PAGES_FAILURE: {
            return {
                data: null,
                error: action.error,
                status: "error"
            };
        }
    }

    return state;
};

export const Search = (
    state = {
        year: null,
        make: "",
        model: "",
        categories: [],
        text: "",
        page: 1
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.SEARCH_CRITERIA: {
            return {
                ...state,
                ...action.payload
            };
        }
    }

    return state;
};
