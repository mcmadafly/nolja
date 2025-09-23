// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your custom configs here
  rules: {
    // Enforce 4 spaces indentation with core ESLint rule
    indent: ['error', 4, { SwitchCase: 1 }],
    // Ensure Nuxt's stylistic rules also expect 4 spaces
    '@stylistic/indent': ['error', 4, { SwitchCase: 1 }],
    // TypeScript-specific indent rule can conflict with core rule; disable it
    '@typescript-eslint/indent': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // Enforce 4 spaces in Vue template/script blocks
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, { baseIndent: 1 }],
        // Ensure the core indent rule also applies inside <script> blocks
        indent: ['error', 4, { SwitchCase: 1 }],
      },
    },
    {
      files: ['*.ts', '*.js'],
      rules: {
        // Make sure JS/TS files use 4 spaces
        indent: ['error', 4, { SwitchCase: 1 }],
      },
    },
})
