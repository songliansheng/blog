/** @type {import('tailwindcss').Config} */
const path = require('path')
module.exports = {
    darkMode: 'class',
    experimental: {
        applyComplexClasses: true,
    },
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {},
    plugins: [],
}
