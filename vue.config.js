const Webpack = require('webpack');

/*
    To make things clear and easier in development, we prefix all of our styles
    with the path to the component that it belongs to.

    For production, we value efficiency, so we have our styles as hashes.
*/
const isProduction = process.env.NODE_ENV === 'production';
const localIdentName = isProduction
    ? '[hash:base64:5]'
    : '[path][name]__[local]';

module.exports = {
    assetsDir: undefined,
    baseUrl: undefined,
    chainWebpack: (config) => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap((options) => {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            });
    },
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            /*
                We don't want to include the locales data with moment: we don't
                use it and it adds significant bloat to our bundle.
            */
            new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ],
    },
    css: {
        loaderOptions: {
            css: {
                localIdentName,
            },
        },
        sourceMap: true,
    },
    devServer: {
        historyApiFallback: {
            rewrites: [{from: /\/labkit/, to: '/labkit.html'}],
        },
        port: 8081,
    },
    outputDir: undefined,
    pages: {
        labkit: {
            chunks: [
                'chunk-labkit-docs',
                'chunk-vendors',
                'chunk-common',
                'labkit',
            ],
            entry: 'documentation/main.js',
            filename: 'labkit.html',
            title: 'LabKit',
        },
    },
    parallel: undefined,
    productionSourceMap: undefined,
    runtimeCompiler: undefined,
};
