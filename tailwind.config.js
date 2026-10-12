/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
