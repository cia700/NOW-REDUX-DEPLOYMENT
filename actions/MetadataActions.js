import ActionTypes from "./ActionTypes";
import Amplify, { Auth, API } from "aws-amplify";
import aws_exports from "../aws-exports";

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

export const onFetchYears = () => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";
        let myInit = {
            headers: {
                "Action-Event": "years"
            },
            response: true,
            queryStringParameters: {}
        };

        return API.get(apiName, path, myInit)
            .then(response => {
                dispatch({
                    type: ActionTypes.FETCH_YEARS_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: ActionTypes.FETCH_YEARS_FAILURE,
                    error: error
                });
            });
    };
};

export const onFetchMakes = id => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";
        let myInit = {
            body: {
                attributeId: id
            },
            response: true,
            headers: {
                "Action-Event": "content"
            }
        };

        // Modifying "isloading" on state so that "select" component shows that it is looking his options data.
        dispatch({
            type: ActionTypes.FETCH_MAKES_LOADING,
            isloading: true
        });

        return API.post(apiName, path, myInit)
            .then(response => {
                dispatch({
                    type: ActionTypes.FETCH_MAKES_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: ActionTypes.FETCH_MAKES_FAILURE,
                    error: error
                });
            });
    };
};

export const onFetchModels = id => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";
        let myInit = {
            body: {
                attributeId: id
            },
            response: true,
            headers: {
                "Action-Event": "content"
            }
        };

        // Modifying "isloading" on state so that "select" component shows that it is looking his options data.
        dispatch({
            type: ActionTypes.FETCH_MODELS_LOADING,
            isloading: true
        });

        return API.post(apiName, path, myInit)
            .then(response => {
                dispatch({
                    type: ActionTypes.FETCH_MODELS_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: ActionTypes.FETCH_MODELS_FAILURE,
                    error: error
                });
            });
    };
};

export const onFetchCategory = () => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";

        let myInit = {
            headers: {
                "Action-Event": "list-product-categories"
            },
            response: true,
            queryStringParameters: {}
        };

        return API.get(apiName, path, myInit)
            .then(response => {
                dispatch({
                    type: ActionTypes.FETCH_CATEGORIES_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: ActionTypes.FETCH_CATEGORIES_FAILURE,
                    error: error
                });
            });
    };
};

export const onReset = action => {
    return async (dispatch, getState) => {
        let response = {
            data: [],
            status: "success"
        };

        dispatch({
            type: action,
            payload: response
        });
    };
};

export const onFetch = id => {
    return async (dispatch, getState) => {
        //let session = await Auth.currentSession();

        let apiName = name;
        let path = "/api/public";
        let myInit = {
            body: {
                id: id
            },
            response: true,
            headers: {
                "Action-Event": "years"
                //"Access-Token": session.idToken.jwtToken
            }
        };

        return API.post(apiName, path, myInit)
            .then(response => {
                dispatch({
                    type: ActionTypes.FETCH_EMAIL_SUCCESS,
                    payload: emails
                });
            })
            .catch(error => {
                dispatch({
                    type: ActionTypes.FETCH_EMAIL_FAILURE,
                    error: error
                });
            });
    };
};
