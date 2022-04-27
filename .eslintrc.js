module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'eslint:recommended', 'plugin:react/jsx-runtime'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'import/prefer-default-export': 0,
        'react/state-in-constructor': 0,
        'no-console': 0,
        'react/prop-types': 0,
        'react/prefer-stateless-function': 0,
        'no-unused-vars': 0,
        // enable additional rules
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],

        semi: ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        // override default options for rules from base configurations

        'no-cond-assign': ['error', 'always']
    }

};
