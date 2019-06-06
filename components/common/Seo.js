import React, { Component } from "react";
import { connect } from "react-redux";
import { Head } from "../../Imports";

import { WEBSITE_URL } from "../../utils/Utils";

class Seo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentWillMount = () => {
        const pageCategoryType = this.props.pageCategoryType;

        if (pageCategoryType == "DETAILS") {
            const productName = this.props.productsList.title;

            this.setState({
                data: {
                    title: productName,
                    url: `${WEBSITE_URL}/p/${this.props.productsList.id}/${String(productName).toLowerCase()
                        .replace(/\s+/g, "-")}`,
                    metaDescription: "...",
                    image: this.props.productsList.pictureURL[0]
                }
            });
        } else {
            this.setState({
                data: {
                    title: this.props.title,
                    url: `${WEBSITE_URL}${this.props.url}`,
                    metaDescription: this.props.metaDescription,
                    image: `${WEBSITE_URL}/static/images/favicon.jpg`
                }
            });
        }
    };

    getSchemaForProduct = (p, hasContext = false) =>
        `{
            ${hasContext ? '"@context": "http://schema.org/",' : ""}
            "@type": "Product",
            "name": "${p.title}",
            "image": "${p.pictureURL[0]}",
            "manufacturer": {
                "@type": "Organization",
                "name": "${p.make}"
            },
            "model": "${p.model}",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "${p.currentPrice}",
                "availability": "http://schema.org/InStock"
            }
        }`;

    jsonld = () => ({
        __html: Array.isArray(this.props.productsList)
            ? `{
                    "@context": "http://schema.org/",
                    "@type": "ItemList",
                    "url": "${this.state.data.url}",
                    "numberOfItems": "${[...this.props.productsList].length}",
                    "itemListElement": [
                        ${this.props.productsList.map(p =>
                            this.getSchemaForProduct(p)
                        )}
                    ]
                }`
            : this.getSchemaForProduct(this.props.productsList, true)
    });

    render = () => {
        return (
            <Head>
                {/* HTML5 */}
                <title key="title">{this.state.data.title}</title>
                <meta
                    name="description"
                    content={this.state.data.metaDescription}
                    key="description"
                />

                {/* OpenGraph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={this.state.data.title}
                    key="og:title"
                />
                <meta
                    property="og:description"
                    content={this.state.data.metaDescription}
                    key="og:description"
                />
                <meta
                    property="og:url"
                    content={this.state.data.url}
                    key="og:url"
                />
                <meta
                    property="og:image"
                    content={this.state.data.image}
                    key="og:image"
                />
                <meta property="og:height" content="58" key="og:height" />
                <meta property="og:width" content="50" key="og:width" />

                {/* Schema.org */}
                {this.props.productsList && (
                    <script
                        key="schema.org"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={this.jsonld()}
                    />
                )}
            </Head>
        );
    };
}

function mapStateToProps(state) {
    return {
        pages: state.pages,
        products: state.products
    };
}

export default connect(mapStateToProps)(Seo);
