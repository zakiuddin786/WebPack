const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        "hello-world": "./src/hello-world.js",
        "spiderman": "./src/spiderman.js"
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'./dist'),
        // publicPath: "dist/" need to provide the url where we deploy our application
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
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
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
            chunks: ["hello-world", "vendors~hello-world~spiderman"],
            title:'Hello World',
            template: 'src/page-template.hbs',
            description: "Some Description"
        }),
        new HtmlWebpackPlugin({
            filename: "spiderman.html",
            chunks: ["spiderman", "vendors~hello-world~spiderman"],
            title:'Spidy',
            template: 'src/page-template.hbs',
            description: "This is spidy way"
        })
    ]
}