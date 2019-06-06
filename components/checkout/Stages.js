import React, { Component } from "react";

class Stages extends Component {
    componentDidMount() {
        const stages = document.querySelectorAll(".stages figure");
        stages[this.props.active - 1].querySelector("p").className =
            "active-stage";
    }

    getShipping = () => {
        return (
            <figure>
                <p>1</p>
                <figcaption>Shipping</figcaption>
            </figure>
        );
    };

    render() {
        return (
            <article className="stages">
                {this.props.onClick
                    ? (
                        <a
                            className="linked-step"
                            onClick={this.props.onClick}
                        >
                            {this.getShipping()}
                        </a>
                    )
                    : this.getShipping()
                }
                <figure>
                    <p>2</p>
                    <figcaption>Payment</figcaption>
                </figure>
                <hr />
            </article>
        );
    }
}

export default Stages;
