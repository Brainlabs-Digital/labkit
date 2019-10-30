/*
    ESLint should be used for correctness and Prettier is used for style, with
    the exception of <template> tags as Prettier has bugs when formatting those
    as of version 1.15.0.
*/

module.exports = {
    root: true,
    env: {
        jest: true,
        node: true,
    },
    extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],
    rules: {
        camelcase: [
            'error',
            {
                properties: 'never',
            },
        ],
        curly: 'error',
        eqeqeq: ['error', 'always'],
        'no-console': [
            process.env.NODE_ENV === 'production' ? 'error' : 'off',
            {
                allow: ['warn', 'error'],
            },
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-empty': 'error',
        'no-useless-concat': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-template': 'error',
        'vue/html-indent': ['error', 4],
        'vue/mustache-interpolation-spacing': ['error', 'never'],
        'vue/require-default-prop': 0,
        'vue/require-prop-types': 0,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
