const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index"),
  
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist/',
    filename: "index.js",
    library: 'flow-md',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    rules: [

      //  use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // css & style loader for css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // also handle scss files
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
              {
                  loader: 'url-loader',
                  options:{
                      fallback: "file-loader",
                      name: "[name][md5:hash].[ext]",
                      outputPath: 'res/',
                      publicPath: '/res/'
                  }
              }
          ]
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {          
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'react-redux': path.resolve(__dirname, './node_modules/react-redux'),
      'res': path.resolve(__dirname, "res")    
    } 
  },

  externals: {
    react: {          
      commonjs: "react",          
      commonjs2: "react",          
      amd: "React",          
      root: "React"      
    },
    "react-dom": {          
        commonjs: "react-dom",          
        commonjs2: "react-dom",          
        amd: "ReactDOM",          
        root: "ReactDOM"      
    }
  },

  plugins: []
};
