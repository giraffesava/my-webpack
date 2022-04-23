import {Configuration} from 'webpack'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import * as path from "path";


const devServer: DevServerConfiguration = {
    liveReload: true,
    client: {
        progress: true, // percentage
    },
    historyApiFallback: true, // Helps to avoid using react-router 404 request, e.x
    port: 4000,
    open: true,
};

const webpackConfig: Configuration ={
    entry: './src/index.tsx',
    devServer,
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'build.js',
        publicPath: '/',
    },

}

export default webpackConfig