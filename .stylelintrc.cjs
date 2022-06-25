module.exports = {
  extends: ['@teleskop150750/stylelint-config-vue-prettier'],
  rules: {
    'string-quotes': 'single',
    'keyframes-name-pattern': '.+',
    'declaration-block-trailing-semicolon': ['always', { ignore: ['single-declaration'] }],
    'selector-id-pattern': '^.+$',
  },
};
