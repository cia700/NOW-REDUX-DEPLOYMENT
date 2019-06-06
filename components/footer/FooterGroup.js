import React, { Component } from "react";

class FooterGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
    }

    toggle = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    render = () => {
        return (
            <div>
                <button
                    className={!this.state.expanded ? "collapsed" : ""}
                    onClick={this.toggle}
                >
                    {this.props.name}
                </button>
                <ul
                    className={`${
                        !this.state.expanded ? "collapse" : ""
                    } d-sm-block`}
                >
                    {this.props.pages.map(p => (
                        <li key={p.id}>
                            <a href={`/content/${p.url}`}>{p.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
}

export default FooterGroup;
