const path = require('path');
const HTMLWebpackPlagin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlagin({
            title: 'website',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    }
}
