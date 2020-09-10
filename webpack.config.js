const path = require('path');

const config = {
    target: 'web',
    entry: {
        getOperator: './src/getOperator.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'noTelp.js',
        library: 'NoTelp',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this'
    }
};

module.exports = [ config ];
