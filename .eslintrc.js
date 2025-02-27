module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],

    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // Módulos de Node.js
          'external', // Paquetes de npm
          'internal', // Módulos internos del proyecto
          'parent', // Importaciones relativas de archivos padres
          'sibling', // Importaciones relativas del mismo nivel
          'index', // Importaciones desde index.ts
          'type', // Importaciones de solo tipos (TypeScript)
        ],
        'newlines-between': 'always', // Agregar una línea entre grupos
        alphabetize: { order: 'asc', caseInsensitive: true }, // Orden alfabético
      },
    ],
  },
};
