const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports={
    entry: "./src/index.js", 
    output: {
     filename:'[name].bundle.js',
     path:path.resolve(__dirname, 'dist')
    },
    target: "web",
    devServer: {
        port: "3000",
        open: true,
        hot: true ,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,    //
                exclude: /node_modules/, //folder to be excluded
                use:  'babel-loader' //
            },
            {
                test: /\.s[ca]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                    loader:'css-loader', options:{
                        modules:true
                    }
                }, 'sass-loader'],
              },

              {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000
                  }
                }
              ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: './public/index.html'
        })
   ]
}