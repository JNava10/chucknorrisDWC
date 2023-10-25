const path = require("path");
module.exports = {
    entry: {
        index: "./src/index.js",
        frase: "./src/frase.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    }
};