var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(pathStr) {
    return path.resolve(__dirname, pathStr)
}

const config = {
    build: {
        assetsSubDirectory: resolve('./dist/static'),
        path: resolve('./dist'),
        port: '8043'
    }
}

const isDev = process.env.type

const plugins = [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        favicon: 'src/favicon.ico',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    }),
    new MiniCssExtractPlugin({
        filename: 'static/css/[name].[chunkhash:8].css',
        chunkFilename: '[id].css'
    })


]
if (isDev) {
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
} else {
    plugins.push(
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './static'),
                to: config.build.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    )
}

module.exports = {
    mode: 'development',
    entry: {
        index: resolve('./src/index.js')
    },
    devServer: {
        hot: false,
        inline: true,//DevServer 会在构建完变化后的代码时通过代理客户端控制网页刷新。
        port: config.build.port,
        open: 'http://localhost:' + config.build.port + '/'
    },
    output: {
        path: config.build.path,
        filename: 'static/js/[name].[hash].js'

    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: 'es2015'
                    }
                }]
            },
            {
                test: /.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'sass-loader'

                    }
                ]

            }

        ]
    },
    plugins: plugins,
    resolve: {
        extensions: ['js', 'vue', 'json', 'css', 'sass'],
        alias: {}
    },
    externals:{
        'Swiper': 'Swiper',
    }


}
