import React, { Component } from "react";
import ReactDOM from "react-dom"
import scriptLoader from "react-async-script-loader";

import PayPalPlaceholder from "../placeholder/PayPalPlaceholder";

let PayPal = null;

//let clientId =
//    process.env.NODE_ENV === "production"
//        ? process.env.REACT_APP_PAYPAL_CLIENTID_LIVE
//        : process.env.REACT_APP_PAYPAL_CLIENTID_SANDBOX;

let clientId = process.env.REACT_APP_PAYPAL_CLIENTID_SANDBOX;

class PayPalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton: false
        };
    }

    componentDidMount() {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;

        if (isScriptLoaded && isScriptLoadSucceed) {
            this.setState({ showButton: true });

            this.init();
        }
    }

    componentWillReceiveProps(nextProps) {
        const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

        const isLoadedButWasntLoadedBefore =
            !this.state.showButton &&
            !this.props.isScriptLoaded &&
            isScriptLoaded;

        if (isLoadedButWasntLoadedBefore) {
            if (isScriptLoadSucceed) {
                this.setState({ showButton: true });
                this.init();
            }
        }
    }

    init = () => {
        if (PayPal == null) {
            PayPal = paypal.Buttons.driver("react", {
                React,
                ReactDOM
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.showButton ? (
                    <PayPal
                        createOrder={this.props.createOrder}
                        onApprove={this.props.onApprove}
                    />
                ) : (
                    <div
                        style={{
                            paddingLeft: "10px"
                        }}
                    >
                        {/* <span
                            className="mr-2 spinner-border spinner-border-sm text-success"
                            style={{
                                bottom: "10px",
                                right: 0
                            }}
                        />
                        {"Loading PayPal..."} */}
                        <PayPalPlaceholder />
                    </div>
                )}
            </div>
        );
    }
}

export default scriptLoader(
    `https://www.paypal.com/sdk/js?client-id=${clientId}`
)(PayPalButton);
