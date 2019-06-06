import React, { Component } from "react";
import { Counter, _ } from "../../Imports";
import Link from "next/link";

class Product extends Component {
    render = () => {
        const href = "#";

        let name = this.props.product.title.toLowerCase().replace(/\s+/g, "-");

        let image =
            process.env.REACT_APP_IMAGE_BASE_URL +
            this.props.product.pictureURL[0];

        return (
            <figure>
                <a
                    href={`/p/${this.props.product.id}/${name}`}
                    className="card-header"
                >
                    <img src={image} alt={this.props.product.name} />
                </a>

                <figcaption>
                    <a
                        href={`/p/${this.props.product.id}/${name}`}
                        title={name}
                    >
                        <h3 className="mt-2">
                            {_.capitalize(this.props.product.title)}
                        </h3>
                    </a>
                    <div className="card-info">
                        <p>{`Year: ${
                            this.props.product.year
                                ? _.capitalize(this.props.product.year)
                                : ""
                        }`}</p>
                        <p>{`Make: ${
                            this.props.product.make
                                ? _.capitalize(this.props.product.make)
                                : ""
                        }`}</p>
                        <p>{`Model: ${
                            this.props.product.model
                                ? _.capitalize(this.props.product.model)
                                : ""
                        }`}</p>
                    </div>

                    <p className="small">Per Unit:</p>
                    <p className="product-price">{`Now Only $${this.props.product.price.toFixed(
                        2
                    )}`}</p>
                    <p className="small small-plus">Plus Applicable Taxes</p>

                    <Counter product={this.props.product} />

                    {/* <p className="label-red">On Sale!</p> */}
                    <p className="label-blue">In Stock</p>
                </figcaption>
            </figure>
        );
    };
}

export default Product;
