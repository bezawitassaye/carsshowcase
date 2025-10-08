// Export PostCSS config in object form where plugin names are keys.
// This avoids passing plugin objects directly and matches Next.js expectations.
export default {
  plugins: {
    '@tailwindcss/postcss': { config: './tailwind.config.cjs' },
    autoprefixer: {},
  },
};