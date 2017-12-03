var path = require('path');
module.exports = {
    context: __dirname + "/src",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    }
}