import React, { Component } from "react";
import { connect } from "react-redux";
import {
    DataActions,
    Utils,
    _
} from "../../Imports";

import FooterGroup from "./FooterGroup";
import FooterSocials from "./FooterSocials";
import FooterCopyright from "./FooterCopyright";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = async () => {
        if (this.props.pages.data.length === 0) {
            await this.props.onFetchPages();
        }
    };

    getFooterLinks = () => {
        let pages = this.props.pages.data;

        //Filter the Bottom Position
        let bottom = _.filter(pages, page => {
            return (
                page.parent === null &&
                _.indexOf(page.positions, "BOTTOM") !== -1
            );
        });

        //Create Group
        let links = _.map(bottom, p => {
            let childs = _.filter(pages, function(child) {
                return child.parent !== null && child.parent === p.id;
            });

            return {
                id: p.id,
                name: p.name,
                pages: childs
            };
        });

        return links;
    };

    render = () => {
        const checkout = Utils.isCheckoutPage(this.props.asPath);
        let footerLinks = this.getFooterLinks();

        return (
            <footer>
                {!checkout && (
                    <div className="main">
                        <div>
                            <img src="/static/images/bg_hero.jpg" alt="" />
                            <nav id="footer-nav">
                                {footerLinks.map(link => (
                                    <FooterGroup
                                        key={link.id}
                                        name={link.name}
                                        pages={link.pages}
                                    />
                                ))}
                            </nav>
                            <FooterSocials />
                        </div>
                    </div>
                )}
                <FooterCopyright isCheckout={checkout} />
            </footer>
        );
    };
}

const mapStateToProps = state => {
    return {
        pages: state.pages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPages: () => dispatch(DataActions.onFetchPages())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);
