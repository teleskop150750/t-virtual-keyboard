module.exports = {
  extends: ['@teleskop150750/eslint-config-vue-prettier'],
  rules: {
    'no-undef': 'off',
    '@typescript-eslint/no-non-null-assertion': 0,
    // 'unicorn/prevent-abbreviations': [
    //   'error',
    //   {
    //     allowList: {
    //       mod: true,
    //       env: true,
    //       Props: true,
    //       props: true,
    //       isRef: true,
    //       customRef: true,
    //       ref: true,
    //       shallowRef: true,
    //       toRefs: true,
    //       toRef: true,
    //       triggerRef: true,
    //       useAttrs: true,
    //       useCssVars: true,
    //       Dir: true,
    //     },
    //   },
    // ],
    'unicorn/prevent-abbreviations': 0,
    '@typescript-eslint/no-use-before-define': 0,
  },
};
