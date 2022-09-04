const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    entry: {
        "hello-world": "./src/hello-world.js",
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: "http://localhost:9001"
        //  need to provide the url where we deploy our application
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 10000,
            automaticNameDelimiter: "_"
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/env"],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: 'handlebars-loader',
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(),'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            filename: "hello-world.html",
            title:'Hello World',
            template: 'src/page-template.hbs',
            description: "Some Description"
        }),
        new ModuleFederationPlugin({
            name: "HelloWorldApp",
            filename: "remoteEntry.js",
            exposes: {
                "./HelloWorldButton" : "./src/components/hello-world-button/hello-world-button.js"
            }
        })
    ]
}