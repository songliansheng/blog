/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    experimental: {
        applyComplexClasses: true,
    },
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        // Use line below instead if you are using `src` directory:
        //  './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {},
    plugins: [],
}
