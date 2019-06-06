import React, { Component } from "react";

import Featured from "./Featured";
import ArrivalsSet from "./ArrivalsSet";

class Arrivals extends Component {
    render = () => {
        return (
            <section className="arrivals">
                <div>
                    <Featured featured={this.props.featured} />
                    {/*<ArrivalsSet arrivals={this.props.arrivals} />*/}
                </div>
            </section>
        );
    };
}

export default Arrivals;
