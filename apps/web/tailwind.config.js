/** @type {import('tailwindcss').Config} */
const path = require('path')
module.exports = {
    darkMode: 'class',
    experimental: {
        applyComplexClasses: true,
    },
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './content/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {},
    plugins: [],
}
