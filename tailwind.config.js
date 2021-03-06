const mode = process.env.NODE_ENV === "production";

module.exports = {
  purge: {
    enabled: mode,
    content: [
      './src/js/**/*.js',
      './dist/layout/*.liquid',
      './dist/templates/*.liquid',
      './dist/templates/customers/*.liquid',
      './dist/sections/*.liquid',
      './dist/snippets/*.liquid'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
