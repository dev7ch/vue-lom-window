const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: [
        './src/index.ts',
    ],
    output: {
        path: `${__dirname}/lib`,
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.scss/, use: ["style-loader", "css-loader", "sass-loader",] },
            {
                test: /\.ts$/, loader: 'ts-loader', options: {
                    compilerOptions: {
                        declaration: true,
                        declarationDir: "./lib/types",
                    },
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ],
    },
    externals: [
        // include only relative assets
        function (context, request, callback) {
            if (!request.match(/(?:^|!)(?:\.|\.\.)?\//))
                return callback(null, `commonjs ${request}`)
            callback()
        },
        {
            Vue: 'vue'
        }
    ],
    plugins: [
        new VueLoaderPlugin(),
    ],
}
