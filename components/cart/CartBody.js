import React, { Component } from "react";
import { connect } from "react-redux";
import { PopoverBody } from "../../Imports";
import CartItem from "./CartItem";

class CartBody extends Component {
    render = () => {
        return (
            <PopoverBody tag="ul" className="cart-list">
                {this.props.cart.products.map(p => (
                    <CartItem key={p.id} product={p} />
                ))}
            </PopoverBody>
        );
    };
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartBody);
