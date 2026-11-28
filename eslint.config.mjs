import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import htmlReact from '@html-eslint/eslint-plugin-react'
import mochaPlugin from 'eslint-plugin-mocha'

export default defineConfig([
    {
        extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
        plugins: ['prettier'],
        rules: {
            'prettier/prettier': 'error',
            'no-unused-vars': 'warn',
            'no-console': 'off',
            'func-names': 'off',
            'no-process-exit': 'off',
            'object-shorthand': 'off',
            'class-methods-use-this': 'off',
        },
    },
])
