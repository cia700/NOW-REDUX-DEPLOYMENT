import React, { Component } from "react";

class PayPalPlaceholder extends Component {
    render() {
        return (
            <div className="content-placeholder">
                <div className="cp-w-lg cp-h-lg mb-3 rounded" />
                <div className="cp-w-lg cp-h-lg mb-3 rounded" />
                <figure className="d-flex justify-content-center">
                    <div className="cp-h-lg rounded" style={{
                        width: "80px"
                    }} />
                    <div className="cp-h-lg ml-3 rounded" style={{
                        width: "80px"
                    }} />
                    <div className="cp-h-lg ml-3 rounded" style={{
                        width: "80px"
                    }} />
                    <div className="cp-h-lg ml-3 rounded" style={{
                        width: "80px"
                    }} />
                </figure>
            </div>
        );
    }
}

export default PayPalPlaceholder;
