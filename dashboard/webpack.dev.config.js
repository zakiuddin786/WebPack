const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    entry: {
        "dashboard": "./src/dashboard.js"
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: "http://localhost:9000/"
        // publicPath: "dist/" need to provide the url where we deploy our application
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: path.resolve(__dirname,'./dist'),
        devMiddleware: {
            writeToDisk: true,
            index: "dashboard.html",
        },
        historyApiFallback: {
            // This helps webpack to load the default html file incase of any API failure
            index: "dashboard.html"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "dashboard.html",
            title:'Dashboard',
        }),
        new ModuleFederationPlugin({
            name: "App",
            filename: "remoteEntry.js",
            remotes:{
                HelloWorldApp : "HelloWorldApp@http://localhost:9001/remoteEntry.js",
                SpiderManApp : "SpiderManApp@http://localhost:9002/remoteEntry.js",
            }
        })
    ]
}