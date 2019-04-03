const path =require('path')
module.exports = {
    entry:{
        index:[path.join(__dirname,'./src/index.ts')],
    },
    output:{
        path:path.resolve(__dirname,'./output'),
        filename:'[name].js',
    },
    devtool:'source-map',
    resolve:{
        //数组内填入什么后缀，引入该后缀时可以文件名可以不带后缀,第一个必须为“”,否则require全名时反而无法解析
        extensions:[".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    module:{
        rules:[
            {test:/\.tsx?$/,loader:"ts-loader"},
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}