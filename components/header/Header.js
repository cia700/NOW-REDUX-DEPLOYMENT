import React, { Component } from "react";
import { connect } from "react-redux";
import {
    UiActions,
    classNames,
    Cart,
    Utils,
    Router,
    _
} from "../../Imports";
import { Auth, Hub } from "aws-amplify";
import { Authenticator } from "aws-amplify-react";
import SignIn from "../amplify/Auth/SignIn";
import SignUp from "../amplify/Auth/SignUp";
import ForgotPassword from "../amplify/Auth/ForgotPassword";

import {
    Modal,
    ModalHeader,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

import aws_exports from "../../aws-exports";

const signUpConfig = {
    hideAllDefaults: true,

    //given_name = Fist Name
    //family_name = Last Name
    //name = Fullname
    //address

    signUpFields: [
        {
            label: "Email",
            key: "username",
            required: true,
            placeholder: "Email",
            type: "email",
            displayOrder: 1
        },
        {
            label: "Password",
            key: "password",
            required: true,
            placeholder: "Password",
            type: "password",
            displayOrder: 2
        },
        {
            label: "First Name",
            key: "given_name",
            required: true,
            placeholder: "First Name",
            type: "string",
            displayOrder: 3
        },
        {
            label: "Last Name",
            key: "family_name",
            required: true,
            placeholder: "Last Name",
            type: "string",
            displayOrder: 4
        },
        {
            label: "Phone",
            key: "phone_number",
            required: true,
            placeholder: "Phone",
            type: "number",
            displayOrder: 5
        },
        {
            label: "Company",
            key: "company",
            required: true,
            placeholder: "Company",
            type: "string",
            displayOrder: 6,
            custom: true
        },
        {
            label: "Address",
            key: "address",
            required: true,
            placeholder: "Address",
            type: "string",
            displayOrder: 7,
            custom: true
        },
        {
            label: "City",
            key: "city",
            required: true,
            placeholder: "City",
            type: "string",
            displayOrder: 8,
            custom: true
        },
        {
            label: "State",
            key: "state",
            required: true,
            placeholder: "State",
            type: "string",
            displayOrder: 9,
            custom: true
        },
        {
            label: "Zip Code",
            key: "zipcode",
            required: true,
            placeholder: "Zip Code",
            type: "string",
            displayOrder: 10,
            custom: true
        }
        /*{
            label: "Country",
            key: "country",
            required: true,
            placeholder: "Country",
            type: "string",
            displayOrder: 11,
            custom: true
        }*/
    ]
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            isOpen: false,
            authState: "",
            dropdownOpen: false,
            currentUser: {}
        };

        Hub.listen("auth", this);
    }

    dropdownToggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    };

    componentDidMount() {
        // Check the current user when the
        // App component is loaded
        Auth.currentAuthenticatedUser()
            .then(user => {
                this.setState({ authState: "signedIn", currentUser: user });
            })
            .catch(e => {
                console.log(e);
                this.setState({ authState: "signIn" });
            });
    }

    onHubCapsule = async capsule => {
        // The Auth module will emit events when
        // user signs in, signs out, etc
        const { channel, payload, source } = capsule;
        if (channel === "auth") {
            switch (payload.event) {
                case "signIn":
                    let user = await Auth.currentAuthenticatedUser();

                    this.setState({
                        authState: "signedIn",
                        isOpen: false,
                        currentUser: user
                    });

                    //if (Utils.isCheckoutPage(this.props.asPath)) {
                    //    window.location.reload();
                    //}

                    break;
                case "signOut":
                    this.setState({ currentUser: {}, authState: "signIn" });
                    console.log("hello user signed out");
                    break;
                case "signIn_failure":
                    console.log("not signed in");
                    this.setState({ authState: "signIn" });
                    break;
                default:
                    break;
            }
        }
    };

    toggleNavigation = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    toggleCart = e => {
        e.preventDefault();
        this.props.onToggleCart(!this.props.toggleCart);
    };

    countCart = () => {
        return this.props.cart.products.length ? (
            <div>{this.props.cart.products.length}</div>
        ) : null;
    };

    signUp = e => {
        e.preventDefault();
        this.setState({ isOpen: true, authState: "signUp" });
    };

    login = e => {
        e.preventDefault();
        this.setState({ isOpen: true, authState: "signIn" });
    };

    logout = e => {
        e.preventDefault();

        Auth.signOut()
            .then(data => {
                console.log(data);
                window.location = "/";
            })
            .catch(err => console.log(err));
    };

    history = () => {
        Router.push("/order-history");
    };

    profile = () => {
        Router.push("/profile");
    };

    close = () => {
        this.setState({ isOpen: false });
    };

    render = () => {
        const checkout = Utils.isCheckoutPage(this.props.asPath);
        const orderHistory = Utils.isOrderPage(this.props.asPath);
        const thankYouPage = Utils.isThankYouPage(this.props.asPath);
        const profilePage = Utils.isProfilePage(this.props.asPath);
        const products = Utils.isProductsPage(this.props.asPath);
        const home = Utils.isHomePage(this.props.asPath);

        return (
            <header
                className={classNames({ overlap: products || home || true })}
            >
                <div>
                    <a href="/" className="logo" />
                    <div
                        className={classNames(
                            { "column-options": !home },
                            {
                                "dark-options":
                                    checkout ||
                                    orderHistory ||
                                    thankYouPage ||
                                    profilePage
                            },
                            "options"
                        )}
                    >
                        <a href="tel:18005188888" title="Call Us!">
                            <span>1-800-518-8888</span>
                        </a>
                        <ul>
                            {!checkout &&
                                this.state.authState != "signedIn" && (
                                    <li>
                                        <a
                                            onClick={this.signUp}
                                            className="icon-contact"
                                            title="Sign Up"
                                            href="#"
                                        >
                                            {/* <span>Contact</span> */}
                                        </a>
                                    </li>
                                )}

                            {this.state.authState === "signedIn" ? (
                                <Dropdown
                                    nav={true}
                                    isOpen={this.state.dropdownOpen}
                                    toggle={this.dropdownToggle}
                                >
                                    <DropdownToggle nav={true} caret>
                                        <i className="icon-user d-xl-none" />
                                        <span className="d-none d-xl-inline-block">
                                            {_.get(
                                                this.state.currentUser,
                                                "attributes.email",
                                                ""
                                            )}
                                        </span>
                                    </DropdownToggle>
                                    <DropdownMenu tag="ul" right>
                                        <DropdownItem
                                            onClick={this.profile}
                                            tag="li"
                                        >
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem
                                            onClick={this.history}
                                            tag="li"
                                        >
                                            Order History
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={this.logout}
                                            tag="li"
                                        >
                                            Logout
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <li>
                                    <a
                                        onClick={this.login}
                                        className="icon-user"
                                        title="Login"
                                        href="#"
                                    >
                                        {/* <span>User</span> */}
                                    </a>
                                </li>
                            )}

                            <li
                                className={classNames({
                                    "d-md-none": checkout
                                })}
                            >
                                <a
                                    href="#"
                                    id="icon-cart"
                                    onClick={this.toggleCart}
                                    className={"icon-cart"}
                                    title={`${
                                        this.props.cart.products.length
                                    } items your Shopping Cart`}
                                >
                                    {/* <span>Cart</span> */}
                                    {this.countCart()}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Cart toggle={this.toggleCart} isCheckout={checkout} />

                <Modal isOpen={this.state.isOpen} toggle={this.close}>
                    <ModalHeader
                        toggle={this.close}
                        className="border-bottom-0"
                    />
                    <Authenticator
                        hideDefault={true}
                        authState={this.state.authState}
                        amplifyConfig={aws_exports}
                    >
                        <SignIn />
                        <SignUp signUpConfig={signUpConfig} />
                        <ForgotPassword />
                    </Authenticator>
                </Modal>
            </header>
        );
    };
}

const mapStateToProps = state => {
    return {
        toggleCart: state.ui.toggleCart,
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleCart: expanded => dispatch(UiActions.onToggleCart(expanded))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
