import React, { Component } from "react";
import { connect } from "react-redux";
import { _ } from "../../Imports";
import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        let images = [];
        if (this.props.media) {
            images = _.map(this.props.media, function(url) {
                return {
                    original: url,
                    thumbnail: url
                };
            });
        }

        return (
            <div className="gallery">
                <ImageGallery
                    items={images}
                    lazyLoad={true}
                    useBrowserFullscreen={false}
                />
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);
