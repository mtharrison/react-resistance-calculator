const Path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/main.js',
    output: {
        path: Path.resolve(__dirname, "public"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};
