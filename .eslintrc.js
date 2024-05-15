module.exports = {
    env: {
      browser: true,
      jest: true,
      es2021: true,
      node: true, // Добавляем правило для Node.js
    },
    extends: [
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      // Ваши правила здесь
    },
  };
  