/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    experimental: {
        applyComplexClasses: true,
    },
    content: [
        // ALERT Use './src/**/*.{js,ts,jsx,tsx,mdx}' instead if you are using `src` directory
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {},
    plugins: [],
}
