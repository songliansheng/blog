/** @type {import('tailwindcss').Config} */
const path = require('path')
module.exports = {
    darkMode: 'class',
    experimental: {
        applyComplexClasses: true,
    },
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {},
    plugins: [],
}
