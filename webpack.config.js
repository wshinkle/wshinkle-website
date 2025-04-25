const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    watch: true,
    entry: {
        home: { import: './src/home.js', filename: './[name].js' },
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: './assets', to: './assets' }],
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            chunks: ['home'],
        }),
    ],
}
