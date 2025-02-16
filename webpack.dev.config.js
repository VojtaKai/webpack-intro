const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.ts'
        // print: './src/print.ts'
    },
    output: {
        // filename: '[name].bundle.js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: 'development',
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: "babel-loader",
                // It is adviced to have the preset settings set up here as well.
                // Webpack does not always take the babel.config.json into account
                // options: {
                //     presets: [
                //         [
                //             "@babel/preset-env", {
                //                 "targets": "> 0.25%, not dead"
                //             }
                //         ],
                //         "@babel/preset-typescript"
                //     ]
                // },
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'First Webpack Project'
        }),
        new ForkTsCheckerWebpackPlugin()
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5050
    },
    // necessary if [name] in output filename
    // optimization: {
    //     runtimeChunk: 'single',
    // },
}