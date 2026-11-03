import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
    {
        ...js.configs.recommended,
        files: ['src/**/*.js'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ['webpack*.js', 'eslint.config.mjs'],
        languageOptions: {
            globals: globals.node,
        },
    },
    ...tseslint.configs.recommended,
    {
        files: ['src/**/*.ts'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
        },
    },
    {
        files: ['webpack*.js', 'eslint.config.mjs'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    }
);
