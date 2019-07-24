const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            // 匹配后缀为css的文件
            test: /\.css$/,
            // 用两个加载器style-loader和css-loader
            use: ['style-loader', 'css-loader']
        }, {
            // 匹配后缀为html或htm的文件
            test: /\.html|htm$/,
            // 用加载器html-loader
            use: ['html-loader']
        }]
    }
}