import React, { Component } from "react";
import { connect } from "react-redux";
import {
    UiActions,
    OrderActions,
    Utils,
    _
} from "../../Imports";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qty: 0,
            index: null
        };
    }

    static getDerivedStateFromProps = (nextProps, nextState) => {
        const products = nextProps.cart.products;
        const product = products.find(p => p.id == nextProps.product.id);

        if (product) {
            const index = products.findIndex(p => p.id == nextProps.product.id);

            if (nextState.qty != product.qty) {
                return {
                    qty: product.qty,
                    index
                };
            }
        } else {
            return {
                qty: 0,
                index: null
            };
        }

        return null;
    };

    makeObject = qty => {
        return {
            ...this.props.product,
            qty
        };
    };

    onAddToCart = e => {
        e.preventDefault();

        this.setState({
            qty: 1,
            index: this.props.cart.products.length
        });

        this.props.onUpdateCart([
            ...this.props.cart.products,
            this.makeObject(1)
        ]);

        this.props.onToggleCart(true);
        Utils.scrollToTop();
    };

    onChangeQty = e => {
        e.preventDefault();

        const products = this.props.cart.products;
        const qty =
            e.target.name == "add-btn"
                ? this.state.qty + 1
                : this.state.qty - 1;

        // Invetory control
        if (qty > _.get(this.props.product, "quantity", 1)) {
            return;
        }

        // no Zero
        if (this.props.noZero) {
            if (qty == 0) {
                return;
            }
        }

        this.setState({
            qty
        });

        if (qty > 0) {
            this.props.onUpdateCart([
                ...products.slice(0, this.state.index),
                this.makeObject(qty),
                ...products.slice(this.state.index + 1)
            ]);
        } else {
            this.props.onUpdateCart(
                this.props.cart.products.filter(
                    p => p.id != this.props.product.id
                )
            );

            this.setState({
                index: null
            });
        }
    };

    render = () => {
        return (
            <div className="counter">
                <button
                    onClick={this.onAddToCart}
                    className={this.state.qty > 0 ? "d-none" : ""}
                >
                    {this.props.label ? this.props.label : "Add to Cart"}
                </button>

                {!this.props.featured && (
                    <div className={this.state.qty == 0 ? "d-none" : ""}>
                        <button
                            name="substract-btn"
                            onClick={this.onChangeQty}
                        />
                        <input type="text" disabled value={this.state.qty} />
                        <button name="add-btn" onClick={this.onChangeQty} />
                    </div>
                )}
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleCart: expanded => dispatch(UiActions.onToggleCart(expanded)),
        onUpdateCart: products => dispatch(OrderActions.onUpdateCart(products))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
