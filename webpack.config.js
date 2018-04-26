const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin'),
    merge = require("webpack-merge"),
    parts = require('./webpack.parts');

const PATHS = {
    app: path.join(__dirname, "public/js/main.js"),
    build: path.join(__dirname, "dist"),
};

const commonConfig = merge([
    {
        resolve: {
            extensions: ['.js']
        },
        entry: {
            app: ['babel-polyfill', PATHS.app],
        },
        output: {
            path: PATHS.build,
            filename: "[name].js",
        }, 
        plugins: [ 
            new HtmlWebpackPlugin({
                title: 'My App', 
                filename: 'index.html',
                template: './public/index.html'
            }),
        ],
    },
    parts.loadFonts({
        options: {
            name: "[name].[ext]",
        },
    }),
    parts.loadJavaScript({ include: PATHS.app }),
]); 

const productionConfig = merge([
    parts.extractCSS({
        use: "css-loader",
    }),
    parts.loadImages({
        options: {
            limit: 15000,
            name: "[name].[ext]",
        }, 
    }),
]); 

const developmentConfig = merge([
    parts.devServer({
        host: '0.0.0.0', 
        port: 3000,
    }),
    parts.loadCSS(),
    parts.loadImages()
]);

module.exports = env => {
    if (env === "production") {
        return merge(commonConfig, productionConfig);
    }
    return merge(commonConfig, developmentConfig);
}; 
