import ActionTypes from "./ActionTypes";
import Amplify, { Auth, API } from "aws-amplify";
import aws_exports from "../aws-exports";
import _ from "lodash";

let env = process.env.NODE_ENV === "production" ? "prod" : "develop";
let name = process.env.REACT_APP_API_GATEWAY_NAME;
let endpoint = process.env.REACT_APP_API_URL;

aws_exports.API = {
    endpoints: [
        {
            name: name,
            endpoint: endpoint + env
        }
    ]
};

Amplify.configure(aws_exports);

export const onSearchProducts = criterial => {
    return async (dispatch, getState) => {
        let pageSize = process.env.REACT_APP_PAGE_SIZE;

        let apiName = name;
        let path = "/api/public";
        let myInit = {
            body: criterial,
            response: true,
            headers: {
                "Action-Event": "search"
            }
        };

        return API.post(apiName, path, myInit)
            .then(response => {
                // Create a price attribute
                _.forEach(response.data.data.products, function(value) {
                    value.price = value.currentPrice;
                });

                dispatch({
                    type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: ActionTypes.FETCH_PRODUCTS_FAILURE,
                    error: error
                });
            });
    };
};

export const getProduct = payload => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";

        let myInit = {
            body: payload,
            response: true,
            headers: {
                "Action-Event": "get-product"
            }
        };

        return API.post(apiName, path, myInit)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    };
};

export const getPageByUrl = payload => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";

        let myInit = {
            body: payload,
            response: true,
            headers: {
                "Action-Event": "get-page-by-url"
            }
        };

        return API.post(apiName, path, myInit)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    };
};

export const getPageByCategory = payload => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";

        let myInit = {
            body: payload,
            response: true,
            headers: {
                "Action-Event": "get-page-by-category"
            }
        };

        return API.post(apiName, path, myInit)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    };
};

export const onFetchSetting = () => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";

        let myInit = {
            headers: {
                "Action-Event": "get-setting"
            },
            response: true,
            queryStringParameters: {}
        };

        return API.get(apiName, path, myInit)
            .then(response => {
                dispatch({
                    type: ActionTypes.FETCH_SETTINGS_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: ActionTypes.FETCH_SETTINGS_FAILURE,
                    error: error
                });
            });
    };
};

export const onFetchPages = () => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";

        let myInit = {
            headers: {
                "Action-Event": "list-pages"
            },
            response: true,
            queryStringParameters: {}
        };

        return API.get(apiName, path, myInit)
            .then(response => {
                dispatch({
                    type: ActionTypes.FETCH_PAGES_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: ActionTypes.FETCH_PAGES_FAILURE,
                    error: error
                });
            });
    };
};

export const post = (payload, actionEvent) => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";

        let myInit = {
            body: payload,
            response: true,
            headers: {
                "Action-Event": actionEvent
            }
        };

        return API.post(apiName, path, myInit)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    };
};

export const get = actionEvent => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";

        let myInit = {
            response: true,
            headers: {
                "Action-Event": actionEvent
            }
        };

        return API.post(apiName, path, myInit)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    };
};

export const onSetCriteria = criteria => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.SEARCH_CRITERIA,
            payload: criteria
        });
    };
};
