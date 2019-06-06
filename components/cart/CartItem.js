import React, { Component } from "react";
import { connect } from "react-redux";
import {
    UiActions,
    OrderActions,
    Counter
} from "../../Imports";

class CartItem extends Component {
    onRemove = () => {
        const newCart = this.props.cart.products.filter(
            p => p.id != this.props.product.id
        );

        this.props.onUpdateCart(newCart).then(() => {
            if (this.props.cart.products.length == 1) {
                this.props.onToggleCart(false);
            }
        });
    };

    render = () => {
        let name = this.props.product.title.toLowerCase().replace(/\s+/g, "-");

        let image =
            process.env.REACT_APP_IMAGE_BASE_URL +
            this.props.product.pictureURL[0];

        return (
            <li>
                <a href="#">
                    <img src={image} alt={this.props.product.title} />
                </a>
                <div>
                    <a href={`/p/${this.props.product.id}/${name}`} className="product-name">
                        {this.props.product.title}
                    </a>
                    <p className="product-price">${this.props.product.price}</p>
                    Qty:
                    <Counter product={this.props.product} noZero />
                    {/* <a className="icon-pencil" /> */}
                    <a className="icon-trash" onClick={this.onRemove} />
                </div>
            </li>
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
        onUpdateCart: products => dispatch(OrderActions.onUpdateCart(products)),
        onToggleCart: expanded => dispatch(UiActions.onToggleCart(expanded))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItem);
