/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      extend: {
        focus: {
          outline: 'none', // Remover a borda ao focar
          boxShadow: 'none', // Remover a sombra ao focar
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
