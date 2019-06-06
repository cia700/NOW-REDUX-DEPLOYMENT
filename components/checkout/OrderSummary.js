import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Utils,
    Collapse,
    Button,
    _
} from "../../Imports";
import OrderItem from "./OrderItem";

class OrderSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false
        };
    }

    toggle = () => {
        this.setState({
            collapse: !this.state.collapse
        });
    };

    getSubtotal = () => {
        let products = _.get(this.props.cart, "products", null);

        if (products) {
            return Utils.subtotal(products);
        }

        return 0;
    };

    getShipping = () => {
        return 0;
    };

    getTax = () => {
        let tax = {
            taxAmountForTax: 0,
            taxAmountForFetTax: 0
        };

        let products = _.get(this.props.cart, "products", null);
        let settings = _.get(this.props.settings, "data", null);
        if (products && settings) {
            tax = Utils.calculateTax(settings, products);
        }

        return tax;
    };

    render() {
        let subtotal = 0;
        let shipping = 0;
        let tax = {
            taxAmountForTax: 0,
            taxAmountForFetTax: 0
        };
        let totalTax = 0;
        let total = 0;

        if (!this.props.simple) {
            subtotal = this.getSubtotal();
            shipping = this.getShipping();
            tax = this.getTax();
            totalTax = tax.taxAmountForFetTax + tax.taxAmountForTax;
            total = subtotal + totalTax + shipping;
        }

        // Round Up
        total = (Math.round(total * 100) / 100).toFixed(2);
        subtotal = (Math.round(subtotal * 100) / 100).toFixed(2);
        totalTax = (Math.round(totalTax * 100) / 100).toFixed(2);

        const items = this.props.cart.products.map(p => (
            <OrderItem key={p.id} product={p} />
        ));

        return (
            <div className="order-summary">
                <h5>Order Summary</h5>

                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal:</td>
                            <td>${subtotal}</td>
                        </tr>
                        <tr>
                            <td>Shipping:</td>
                            <td>
                                <small>(free) $0.00 </small>
                            </td>
                        </tr>
                        <tr>
                            <td className="pb-2">Tax:</td>
                            <td className="pb-2">${totalTax}</td>
                        </tr>
                        <tr className="total">
                            <td>Total:</td>
                            <td>${total}</td>
                        </tr>
                    </tbody>
                </table>

                {this.props.collapsable && (
                    <Button
                        onClick={this.toggle}
                        size="sm"
                        //close
                        aria-label="Cancel"
                        className="collapse-button"
                    >
                        {this.props.cart.products.length} Items in the Cart
                        <span>{this.state.collapse ? "▲" : "▼"}</span>
                    </Button>
                )}

                {this.props.collapsable ? (
                    <Collapse
                        isOpen={this.state.collapse}
                        className="shopping-products"
                        tag="ul"
                    >
                        {items}
                    </Collapse>
                ) : (
                    <ul>{items}</ul>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        settings: state.settings
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderSummary);
