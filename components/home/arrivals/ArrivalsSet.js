import React, { Component } from "react";
import _ from "lodash";

class ArrivalsSet extends Component {
    render = () => {
        return (
            <article className="arrivals-set">
                <h2>
                    <span>New Arrivals</span>
                </h2>
                <div>
                    {/* Dynamic part here */}
                    {_.map(this.props.arrivals, value => {
                        let url =
                            process.env.REACT_APP_IMAGE_BASE_URL +
                            value.pictureURL[0];

                        return (
                            <div>
                                <h3>{value.title}</h3>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Commodi reiciendis.
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Lorem ipsum dolor sit,
                                        amet consectetur adipisicing elit
                                    </p>
                                    <figure>
                                        <img src={url} alt={value.title} />
                                        <figcaption>
                                            Saturd. 5th March 2016
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        );
                    })}

                    {/* End of part */}
                </div>
                <a href="#">view all</a>
            </article>
        );
    };
}

export default ArrivalsSet;
