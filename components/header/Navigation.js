import React, { Component } from "react";
import { connect } from "react-redux";
import { MetaActions } from "../../Imports";

class Navigation extends Component {
    constructor(props) {
        super(props);

        if (this.props.groupCategory.data == null) {
            this.props.onFetchGroupCategory();
        }
    }

    close = e => {
        if (e.target.tagName == "NAV") {
            this.props.toggle();
        }
    };

    render = () => {
        return (
            <nav
                className={`d-lg-block ${this.props.expanded}`}
                onClick={this.close}
            >
                <ul>
                    <li>
                        <a href="/">
                            <span>Home</span>
                        </a>
                    </li>
                    {this.props.groupCategory.data &&
                        this.props.groupCategory.data.map(c => (
                            <li key={c.id}>
                                <a href={c.url}>{c.name}</a>
                            </li>
                        ))}
                </ul>
            </nav>
        );
    };
}

const mapStateToProps = state => {
    return {
        groupCategory: state.groupCategory
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchGroupCategory: id =>
            dispatch(MetaActions.onFetchGroupCategory(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
