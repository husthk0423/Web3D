
/**
 * 打包整个目录的js文件、css文件、图片文件、字体等
 * 其中配合index_folder.js
 * 
 * 
 * 
 * */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index_folder.js', // 主入口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {                      // 处理javascript文件
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // 处理CSS文件
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // 处理图片文件
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource', // 处理字体文件
            },
            {
                test: /\.glsl$/,//处理glsl文件
                use: [
                  'raw-loader', // 将 GLSL 文件作为字符串导入
                  path.resolve(__dirname, 'src/loaders/glsl-tokenizer-loader.js') // 使用自定义的 GLSL 加载器
                ],
              },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    },
};
