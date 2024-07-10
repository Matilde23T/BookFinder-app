const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename:'index.html'
        })
    ],
    devServer:{
        contentBase:
        path.join(__dirname,'dist'),
        compress:true,
        port:9000,
    }
}