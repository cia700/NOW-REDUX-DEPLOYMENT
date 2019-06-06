import React, { Component } from "react";
import Counter from "../../product/Counter";
import _ from "lodash";

class Featured extends Component {
    render = () => {
        return (
            <article className="featured">
                <h2>
                    <span>Featured Products</span>
                </h2>
                <div>
                    {_.map(this.props.featured, value => {
                        let url =
                            process.env.REACT_APP_IMAGE_BASE_URL +
                            value.pictureURL[0];

                        let name = value.title
                            .toLowerCase()
                            .replace(/\s+/g, "-");
                        let detailUrl = `/p/${value.id}/${name}`;

                        return (
                            <figure key={value.title}>
                                <a href={detailUrl}>
                                    <img src={url} alt={value.title} />
                                </a>
                                <figcaption>
                                    <span title={value.title}>
                                        {value.title}
                                    </span>
                                    <span>{`only $${value.currentPrice.toFixed(
                                        2
                                    )}`}</span>
                                    <div>
                                        <a href={detailUrl}>details</a>
                                        <Counter
                                            label="Buy"
                                            featured
                                            product={value}
                                        />
                                    </div>
                                </figcaption>
                            </figure>
                        );
                    })}
                </div>
            </article>
        );
    };
}

export default Featured;
