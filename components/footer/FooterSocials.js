import React, { Component } from "react";

const socials = {
    facebook: "#f",
    twitter: "#t",
    pinterest: "#p",
    google: "#g",
    rss: "#r"
};

class FooterSocials extends Component {
    onSubscription = () => {
        console.log("subscription action...");
    };

    render = () => {
        return (
            <div className="socials">
                <h4>Stay in touch with our Newsletter sign up.</h4>
                <div>
                    <input type="email" placeholder="E-mail address" />
                    <button onClick={this.onSubscription}>Subscribe</button>
                </div>
                <ul>
                    <h4>Fallow Us</h4>
                    {Object.keys(socials).map(s => (
                        <li key={s}>
                            <a href={socials[s]} className={`icon-${s}`} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
}

export default FooterSocials;
