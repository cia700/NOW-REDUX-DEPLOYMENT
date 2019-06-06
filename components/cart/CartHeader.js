import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Router,
    PopoverHeader,
    Button,
    UiActions
} from "../../Imports";

class CartHeader extends Component {
    subTotal = () => {
        let subtotal = 0;

        this.props.cart.products.map(p => {
            subtotal += p.price * p.qty;
        });

        return subtotal.toFixed(2);
    };

    onCherckout = () => {
        this.props.onToggleCart(false);
        Router.push("/shipping");
    };

    render = () => {
        return (
            <PopoverHeader>
                <p>
                    <span>{this.props.cart.products.length} </span>
                    Items in Cart
                </p>
                <p className="cart-subtotal">
                    Cart Subtotal:
                    <span>${this.subTotal()}</span>
                </p>
                <Button onClick={this.onCherckout}>Proceed to Checkout</Button>
            </PopoverHeader>
        );
    };
}

const mapStateToProps = state => {
    return {
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
)(CartHeader);
