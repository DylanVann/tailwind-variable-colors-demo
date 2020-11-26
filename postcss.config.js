const production = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: production ? {} : false,
  },
}
