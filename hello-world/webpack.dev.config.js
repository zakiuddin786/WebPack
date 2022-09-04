const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    entry: {
        "hello-world": "./src/hello-world.js"
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: "http://localhost:9001/"
        // publicPath: "dist/" need to provide the url where we deploy our application
    },
    mode: 'development',
    devServer: {
        port: 9001,
        static: path.resolve(__dirname,'./dist'),
        devMiddleware: {
            writeToDisk: true,
            index: "hello-world.html",
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", "css-loader", 'sass-loader'
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
                "./HelloWorldButton" : "./src/components/hello-world-button/hello-world-button.js",
                "./HelloWorldPage" : "./src/components/hello-world-page/hello-world-page.js"
            }
        })
    ]
}