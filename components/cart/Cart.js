import React, { Component } from "react";
import { connect } from "react-redux";
import {
    UiActions,
    Popover,
    PopoverBody,
    OrderSummary
} from "../../Imports";

import CartHeader from "./CartHeader";
import CartBody from "./CartBody";

class Cart extends Component {
    render = () => {
        const hasProducts = !!this.props.cart.products.length;

        return (
            <Popover
                className="shopping-cart"
                placement="bottom"
                isOpen={this.props.toggleCart}
                target="icon-cart"
                toggle={this.props.toggle}
                offset={-115}
            >
                <a
                    className="icon-close"
                    onClick={() => this.props.onToggleCart(false)}
                />

                {!this.props.isCheckout ? (
                    <React.Fragment>
                        {hasProducts && <CartHeader />}
                        {hasProducts && <CartBody />}

                        <PopoverBody
                            className={`cart-footer ${
                                hasProducts ? "border-top" : ""
                            }`}
                        >
                            {hasProducts ? (
                                <a href="">View and Edit Cart</a>
                            ) : (
                                <strong>
                                    You have no items in your shopping cart.
                                </strong>
                            )}
                        </PopoverBody>
                    </React.Fragment>
                ) : (
                    <PopoverBody>
                        <OrderSummary />
                    </PopoverBody>
                )}
            </Popover>
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
)(Cart);
