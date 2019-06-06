import React, { Component } from "react";
import { connect, _ } from "../../Imports";

class OrderItem extends Component {
    render() {
        let sale = this.props.product.showSalePrice ? true : false;

        let image =
            process.env.REACT_APP_IMAGE_BASE_URL +
            this.props.product.pictureURL[0];

        return (
            <li>
                <hr role="separator" className="divider" />
                <div className="d-flex align-items-start">
                    <img
                        src={image}
                        alt={this.props.product.title}
                        className="img-product-cart"
                    />
                    <div className="w-100">
                        <p>{_.capitalize(this.props.product.title)}</p>
                        <p className="mt-1 font-weight-bold">
                            ${this.props.product.price.toFixed(2)}
                        </p>
                        <p className="font-weight-bold">
                            Qty: {this.props.product.qty}
                        </p>
                    </div>
                </div>
            </li>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderItem);
