import React, { Component } from "react";
import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Seo from "../common/Seo";

class Layout extends Component {
    render = () => {
        return (
            <React.Fragment>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no, user-scalable=no"
                    />
                    <link rel="icon" href="/static/images/favicon.jpg" />
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            WebFontConfig={google:{families:['Khand','Lato:400,700']}};
                            (function(d){
                                var wf=d.createElement('script'),s=d.scripts[0];
                                wf.src='https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
                                wf.async=true;
                                s.parentNode.insertBefore(wf,s);
                            })(document);`
                    }} />
                </Head>
                <Seo
                    title="Prime Auto Parts"
                    url=""
                    metaDescription="Default meta-description here..."
                />
                <Header asPath={this.props.asPath} />
                {this.props.children}

                <Footer asPath={this.props.asPath} />
            </React.Fragment>
        );
    };
}

export default Layout;
