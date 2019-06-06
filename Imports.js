//React
// import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import withRedux from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CombineReducers from "./reducers/CombineReducers";

// Router
import Router from "next/router";
import Link from "next/link";

// Actions
import ActionTypes from "./actions/ActionTypes";
import * as MetaActions from "./actions/MetadataActions";
import * as DataActions from "./actions/DataActions";
import * as UiActions from "./actions/UiActions";
import * as OrderActions from "./actions/OrderActions";

// Components
import Search from "./components/search/Search";
import Arrivals from "./components/home/arrivals/Arrivals";
import Make from "./components/home/Make";
import Categories from "./components/common/Categories";
import Product from "./components/product/Product";
import Breadcrumb from "./components/product/Breadcrumb";
import Counter from "./components/product/Counter";
import Gallery from "./components/details/Gallery";
import Stages from "./components/checkout/Stages";
import OrderSummary from "./components/checkout/OrderSummary";
import Cart from "./components/cart/Cart";
import Seo from "./components/common/Seo";
import Head from "next/head";

//Lodash
import _ from "lodash";

import Select from "react-select";

//Reactrap
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormGroup,
    Input,
    Label,
    FormFeedback,
    Collapse,
    Pagination,
    PaginationItem,
    PaginationLink,
    CustomInput,
    Popover,
    PopoverBody,
    PopoverHeader,
    Alert
} from "reactstrap";

//Layout
import Main from "./components/layout/Main";

// Dev Tools
import { composeWithDevTools } from "redux-devtools-extension";

//Oders
import FormValidator from "./utils/FormValidator";
import * as Utils from "./utils/Utils";
import classNames from "classnames";

import moment from "moment";

export {
    // React,
    // Component,
    connect,
    createStore,
    applyMiddleware,
    thunk,
    Select,
    promise,
    withRedux,
    persistStore,
    persistReducer,
    storage,
    CombineReducers,
    Router,
    Link,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormGroup,
    Input,
    Label,
    FormFeedback,
    Collapse,
    Pagination,
    PaginationItem,
    PaginationLink,
    CustomInput,
    Popover,
    PopoverBody,
    PopoverHeader,
    Alert,
    Main,
    composeWithDevTools,
    FormValidator,
    Utils,
    classNames,
    ActionTypes,
    MetaActions,
    DataActions,
    UiActions,
    OrderActions,
    Search,
    Arrivals,
    Make,
    Categories,
    Product,
    Breadcrumb,
    Counter,
    Gallery,
    Stages,
    OrderSummary,
    Cart,
    Seo,
    Head,
    _,
    moment
};
