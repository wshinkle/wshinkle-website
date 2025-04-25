const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

var config = {
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

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map'
        config.watch = true
    }

    return config
}
