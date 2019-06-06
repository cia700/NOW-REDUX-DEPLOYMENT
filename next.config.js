const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = withSass(
    withCSS({
        target: "serverless",
        sassLoaderOptions: {
            outputStyle: "compressed",
            includePaths: [`/styles/scss`]
        },
        webpack: config => {
            config.plugins = config.plugins || [];

            // To fix the css problem with
            // Aws Amplify
            if (typeof require !== "undefined") {
                require.extensions[".less"] = () => {};
                require.extensions[".css"] = file => {};
            }

            config.plugins = [
                ...config.plugins,

                // Read the .env file
                new Dotenv({
                    path: path.join(__dirname, ".env"),
                    systemvars: true
                })
            ];

            config.node = {
                fs: "empty"
            };

            return config;
        }
    })
);
