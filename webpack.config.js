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
            {
                test:/.(png|svg|jpg|jpeg|gif|ico)$/i,
                type:'asset/resource',
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename:'index.html',
            favicon:'./src/img/favicon-32x32.png'
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