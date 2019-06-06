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

export const onUpdateCart = products => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.UPDATE_CART,
            payload: products
        });
    };
};

export const onUpdateOrder = order => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.UPDATE_ORDER,
            payload: order
        });
    };
};

export const onSaveOrder = order => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";

        let myInit = {
            body: order,
            response: true,
            headers: {
                "Action-Event": "save-order"
            }
        };

        return API.post(apiName, path, myInit)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    };
};

export const onUpdatePurchaseOrder = payload => {
    return async (dispatch, getState) => {
        let apiName = name;
        let path = "/api/public";

        let myInit = {
            body: payload,
            response: true,
            headers: {
                "Action-Event": "update-purchase-order"
            }
        };

        return API.post(apiName, path, myInit)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    };
};

export const onOrderHistory = () => {
    return async (dispatch, getState) => {
        let session = await Auth.currentSession();

        let apiName = name;
        let path = "/api/private";

        let myInit = {
            response: true,
            headers: {
                "Action-Event": "order-history",
                "Access-Token": session.accessToken.jwtToken
            },
            queryStringParameters: {}
        };

        return API.get(apiName, path, myInit)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    };
};
