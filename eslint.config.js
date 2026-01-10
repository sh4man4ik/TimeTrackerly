import js from '@eslint/js';
import parser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	globalIgnores(['dist']),

	{
		files: ['**/*.{js,jsx,ts,tsx}'],

		extends: [js.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],

		languageOptions: {
			parser,
			ecmaVersion: 'latest',
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true }
			}
		},

		plugins: {
			'@typescript-eslint': tsPlugin
		},

		rules: {
			semi: ['error', 'always'],
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-undef': 'warn',
			'prefer-const': 'off'
		}
	}
]);
