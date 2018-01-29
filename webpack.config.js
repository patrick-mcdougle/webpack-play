var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    BottomScripts_1: ["./js/C.js"],
    BottomScripts_2: ["./js/D.js"],
    TopScripts_1: ["./js/A.js", "./js/B.js"],
    TopScripts_2: ["./js/A.js"]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons'
    })
  ],
  output: { path: path.resolve(__dirname, "dist"), filename: '[name].js' },
};
