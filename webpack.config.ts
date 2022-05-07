import {Configuration} from 'webpack'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import * as path from "path";
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const devServer: DevServerConfiguration = {
    liveReload: true,
    client: {
        progress: true, // percentage
    },
    historyApiFallback: true, // Helps to avoid using react-router 404 request error
    port: 3000,
    open: true,
};

const webpackConfig: Configuration = {
    mode: 'development', //
    entry: './src/index.tsx',
    devServer,
    //devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [new TsconfigPathsPlugin()] // add alias
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
}

export default webpackConfig