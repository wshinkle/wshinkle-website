const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

var config = {
    entry: {
        home: { import: './src/home.ts', filename: './[name].js' },
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
        console.log('Running in development mode')
    }

    return config
}
