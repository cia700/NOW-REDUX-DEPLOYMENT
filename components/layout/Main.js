import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";

import Layout from "./Layout";

class Main extends App {
    static async getInitialProps({ Component, ctx }) {
        return {
            asPath: ctx.asPath,
            pageProps: Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}
        };
    }

    render() {
        const { Component, pageProps, asPath, store } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <div style={{ textAlign: "center" }} asPath={asPath}>
                        <Component {...pageProps} />
                    </div>
                </Provider>
            </Container>
        );
    }
}

export default Main;
