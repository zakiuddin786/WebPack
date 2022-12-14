const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
    entry: {
        "spiderman": "./src/spiderman.js"
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: "http://localhost:9002/"
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
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    "file-loader"
                ]
            },
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
            filename: "spiderman.html",
            title:'Spidy',
            template: 'src/page-template.hbs',
            description: "This is spidy way"
        }),
        new ModuleFederationPlugin({
            name: "SpiderManApp",
            filename: "remoteEntry.js",
            remotes:{
                HelloWorldApp: "HelloWorldApp@http://localhost:9001/remoteEntry.js"
            },
            exposes: {
                "./SpidermanPage": "./src/components/spiderman-page/spiderman-page.js"
            }
        })
    ]
}