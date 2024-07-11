const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                }
            },
            {
                test:/.css$/,
                use:[
                    MiniCssExtractPlugin.loader,'css-loader'
                ]
            },
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'style.css',
        }),
    ],
    devServer:{
        contentBase:
        path.join(__dirname,'dist'),
        compress:true,
        port:9000,
    }
}