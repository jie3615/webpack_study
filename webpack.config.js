// webpack 是node写出来的，要用node的语法
let path = require('path');
let htmlwebpackPlugin = require("html-webpack-plugin")
module.exports = {
    devServer:{ // 开发服务器配置
        port:3000,
        progress:true,
        contentBase:'./build',
        open:true,
        compress:true
    },
    mode:'production',//默认两种production,development
    entry:'./src/index.js',//入口
    output:{
        filename:'bundle.js',// 打包后的文件名
        path:path.resolve(__dirname,'build') // 路径必须是一个绝对路径
    },
    plugins:[
        new htmlwebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ]
}