module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'standard',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	settings: {
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: [
				'.ts',
				'.tsx',
				'.d.ts',
			],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				tabWidth: 4,
				singleQuote: true,
				trailingComma: 'all',
				arrowParens: 'always',
				semi: true,
				useTabs: true,
			},
		],
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-useless-constructor': 'off',
	},
};
