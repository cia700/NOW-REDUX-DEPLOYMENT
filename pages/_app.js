import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import CombineReducers from "../reducers/CombineReducers";
import withRedux from "next-redux-wrapper";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import Main from "../components/layout/Main";
import "../styles/scss/app.scss";

const makeConfiguredStore = (reducer, initialState) => {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, promise))
    );
};

const makeStore = (initialState = {}, { isServer }) => {
    if (isServer) {
        return makeConfiguredStore(CombineReducers, initialState);
    } else {
        const persistConfig = {
            key: process.env.REACT_APP_STORAGE_KEY,
            whitelist: ["cart", "order", "search", "years", "makes", "models"],
            storage
        };

        const persistedReducer = persistReducer(persistConfig, CombineReducers);
        const store = makeConfiguredStore(persistedReducer, initialState);
        store.__persistor = persistStore(store);

        return store;
    }
};

export default withRedux(makeStore)(Main);
