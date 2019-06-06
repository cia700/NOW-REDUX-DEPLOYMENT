import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Search,
    Arrivals,
    Make,
    Categories,
    MetaActions,
    DataActions,
    _
} from "../Imports";

class Index extends Component {
    static async getInitialProps({ query, req, pathname, store }) {
        let state = {
            path: pathname
        };

        return state;
    }

    render = () => {
        return <div style={{ fontSize: "50px" }}>Testing deploy to now</div>;
    };
}

const mapStateToProps = state => {
    return {
        years: state.years
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchYears: function() {
            return dispatch(MetaActions.onFetchYears());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
