const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        "hello-world": "./src/hello-world.js",
        "spiderman": "./src/spiderman.js"
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'./dist'),
        // publicPath: "dist/" need to provide the url where we deploy our application
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: path.resolve(__dirname,'./dist'),
        devMiddleware: {
            writeToDisk: true,
            index: "index.html",
        },
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
                    "style-loader", "css-loader"
                ]
            },
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
            chunks: ["hello-world"],
            title:'Hello World',
            template: 'src/page-template.hbs',
            description: "Some Description"
        }),
        new HtmlWebpackPlugin({
            filename: "spiderman.html",
            chunks: ["spiderman"],
            title:'Spidy',
            template: 'src/page-template.hbs',
            description: "This is spidy way"
        })
    ]
}