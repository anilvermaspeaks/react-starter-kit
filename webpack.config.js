const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry: "./src/index.js", 
    output: {
     filename:'[name].bundle.js',
     path:path.resolve(__dirname, '/dist')
    },
    /** "target"
     * setting "node" as target app (server side), and setting it as "web" is 
     * for browser (client side). Default is "web"
     */
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
                test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use:  'babel-loader' //loader which we are going to use
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './public/index.html' //relative to root of the application
        })
   ]
}