import React, { Component } from "react";
import { connect } from "react-redux";
import {
    ActionTypes,
    DataActions,
    MetaActions,
    Utils,
    _
} from "../../Imports";
import NumberedControl from "./NumberedControl";

class Search extends Component {
    constructor(props) {
        super(props);

        this.isProducts = String(this.props.path).includes("/search");

        this.state = {
            submited: false
        };
    }

    componentWillMount = () => {
        const years = this.props.years;

        if (!years.data.length) {
            this.props.onFetchYears();
        }
    };

    onChangeYear = e => {
        this.props.onReset(ActionTypes.FETCH_MAKES_SUCCESS);
        this.props.onReset(ActionTypes.FETCH_MODELS_SUCCESS);
        
        this.props.onFetchMakes(e.value);     

        this.props.onSetCriteria({
            ...this.props.search,
            year: e.label,
            model: null,
            make: null
        });
    };

    onChangeMake = e => {
        this.props.onReset(ActionTypes.FETCH_MODELS_SUCCESS);

        this.props.onFetchModels(e.value);

        this.props.onSetCriteria({
            ...this.props.search,
            make: e.label,
            model: null
        });
    };

    onChangeModel = e => {
        this.props.onSetCriteria({
            ...this.props.search,
            model: e.label
        });
    };

    onChangeText = e => {
        this.props.onSetCriteria({
            ...this.props.search,
            text: e.target.value
        });
    };

    getOptions = (array, desc = false) => {
        let options = _.map(array, function(value) {
            return {
                value: value.id,
                label: value.label
            };
        });

        if (desc) {
            options = _.sortBy(options, "label").reverse();
        } else {
            options = _.sortBy(options, "label");
        }

        return options;
    };

    onGo = e => {
        e.preventDefault();

        this.setState({
            submited: true
        });

        this.onServerNavigation();
    };

    onServerNavigation = (page = 1) => {
        const {year, make, model, text, categories} = this.props.search;

        if (!year || !make || !model || !text){
            return;
        }

        let ct = _.join(categories, ",");

        Utils.scrollToTop();
        window.location = `/search?y=${year}&mk=${make}&md=${model}&t=${text}&ct=${ct}&p=${page}&size=${
            process.env.REACT_APP_PAGE_SIZE
        }`;
    };

    render = () => {
        const yearOptions = this.getOptions(this.props.years.data, true);
        const makesOptions = this.getOptions(this.props.makes.data);
        const modelsOptions = this.getOptions(this.props.models.data);

        return (
            <section className={this.props.banner ? "banner" : "searchbar"}>
                <div>
                    <form>
                        {this.props.banner ? (
                            <p>Start Your Part Search Here!</p>
                        ) : (
                            <p>
                                search by
                                <span>vehicle</span>
                            </p>
                        )}
                        <div className="controls-wrapper">
                            <div className="control-container">
                                <NumberedControl
                                    number={1}
                                    options={yearOptions}
                                    onChange={this.onChangeYear}
                                    isLoading={false}
                                    value={
                                        this.props.search.year
                                            ? {
                                                  value: this.props.search.year,
                                                  label: this.props.search.year
                                              }
                                            : null
                                    }
                                    placeholder="Select Year"
                                    isInvalid={
                                        this.state.submited &&
                                        !this.props.search.year
                                    }
                                />
                            </div>
                            <div className="control-container">
                                <NumberedControl
                                    number={2}
                                    options={makesOptions}
                                    onChange={this.onChangeMake}
                                    isLoading={ this.props.makes.isloading }
                                    value={
                                        this.props.search.make
                                            ? {
                                                  value: this.props.search.make,
                                                  label: this.props.search.make
                                              }
                                            : null
                                    }
                                    placeholder="Select Make"
                                    isInvalid={
                                        this.state.submited &&
                                        !this.props.search.make
                                    }
                                />
                            </div>
                            <div className="control-container">
                                <NumberedControl
                                    number={3}
                                    options={modelsOptions}
                                    onChange={this.onChangeModel}
                                    isLoading={ this.props.models.isloading }
                                    value={
                                        this.props.search.model
                                            ? {
                                                  value: this.props.search
                                                      .model,
                                                  label: this.props.search.model
                                              }
                                            : null
                                    }
                                    placeholder="Select Model"
                                    isInvalid={
                                        this.state.submited &&
                                        !this.props.search.model
                                    }
                                />
                            </div>
                            <div className="control-container input-name">
                                <NumberedControl
                                    number={4}
                                    input
                                    onChange={this.onChangeText}
                                    value={this.props.search.text}
                                    placeholder="Enter Part Name"
                                    isInvalid={
                                        this.state.submited &&
                                        !this.props.search.text
                                    }
                                />
                            </div>
                            <div className="control-container control-button">
                                <button onClick={this.onGo}>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    };
}

const mapStateToProps = state => {
    return {
        years: state.years,
        makes: state.makes,
        models: state.models,
        search: state.search,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchYears: function() {
            return dispatch(MetaActions.onFetchYears());
        },
        onFetchMakes: function(id) {
            return dispatch(MetaActions.onFetchMakes(id));
        },
        onFetchModels: function(id) {
            return dispatch(MetaActions.onFetchModels(id));
        },
        onReset: function(action) {
            return dispatch(MetaActions.onReset(action));
        },
        onSetCriteria: criteria =>
            dispatch(DataActions.onSetCriteria(criteria)),
        onSearchProducts: () => dispatch(DataActions.onSearchProducts())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
