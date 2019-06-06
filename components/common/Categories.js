import React, { Component } from "react";
import { connect } from "react-redux";
import { DataActions, Utils } from "../../Imports";
import _ from "lodash";

class Categories extends Component {
    onServerNavigation = (e, childs) => {
        e.preventDefault();

        let ids = _.map(childs, v => {
            return v.id.toString();
        });

        this.props
            .onSetCriteria({
                ...this.props.search,
                categories: ids
            })
            .then(resp => {
                const {
                    year,
                    make,
                    model,
                    text,
                    categories
                } = this.props.search;

                let ct = _.join(categories, ",");

                Utils.scrollToTop();

                if (year && make && model && text && categories) {
                    window.location = `/search?y=${year}&mk=${make}&md=${model}&t=${text}&ct=${ct}&p=${1}&size=${
                        process.env.REACT_APP_PAGE_SIZE
                    }`;
                }
            });
    };

    getCategories = () => {
        let categories = this.props.categories;

        let parents = _.filter(categories, category => {
            return category.parentId === null;
        });

        let filter = _.map(parents, parent => {
            let childs = _.filter(categories, function(child) {
                return child.parentId !== null && child.parentId === parent.id;
            });

            if (childs.length > 0) {
                return (
                    <article key={parent.label}>
                        <a href="#">
                            {parent.label}
                            <span>
                                {parent.label.substring(
                                    parent.label.length - 2,
                                    parent.label.length
                                )}
                            </span>
                        </a>
                        <figure>
                            <img src={parent.img} alt="" />
                            {!this.props.compact && (
                                <figcaption>
                                    <ul>{this.getChildCategories(childs)}</ul>
                                    <a
                                        href="#"
                                        onClick={e => {
                                            this.onServerNavigation(e, childs);
                                        }}
                                    >
                                        see all
                                    </a>
                                </figcaption>
                            )}
                        </figure>
                    </article>
                );
            }
        });

        return filter;
    };

    getChildCategories = categories => {
        return categories.map(c => {
            return <li key={c.label}>{c.label}</li>;
        });
    };

    render = () => {
        return (
            <section className="categories">
                <div>
                    <h2>
                        <span>Browse By Categories</span>
                    </h2>
                    <div>
                        {/* Categories */}
                        {this.getCategories()}
                    </div>
                </div>
            </section>
        );
    };
}

const mapStateToProps = state => {
    return {
        search: state.search
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCriteria: criteria => dispatch(DataActions.onSetCriteria(criteria))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
