import React, { Component } from "react";

const cards = ["visa", "mastercard", "discover", "amex"];

class FooterCopyright extends Component {
    render = () => {
        return (
            <div className="copyright">
                <div>
                    <p>
                        © 2019 Prime Auto Parts. All Rights Reserved.{" "}
                        <span>Powered by</span>
                        <a
                            target="_blanck"
                            href={
                                !this.props.isCheckout
                                    ? "https://www.lawebdevfirm.com"
                                    : null
                            }
                        >
                            LA Web Dev. Firm
                        </a>
                    </p>
                    <ul>
                        {cards.map(c => (
                            <li key={c} className={`icon-${c}`} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    };
}

export default FooterCopyright;
