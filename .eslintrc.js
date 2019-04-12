module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4],
        'linebreak-style': 'off',
        'comma-dangle': ['error', 'never'],
        'semi': ["error", "never"],
        'arrow-parens': ["error", "as-needed"],
        'no-underscore-dangle': ['error', { 'allow': ['_this'] }] 
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}