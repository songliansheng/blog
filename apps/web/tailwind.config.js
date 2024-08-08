/** @type {import('tailwindcss').Config} */
/*  */
module.exports = {
    darkMode: 'class',
    experimental: {
        applyComplexClasses: true,
    },
    
    // ALERT Use "./src/**/*.{ js, ts, jsx, tsx, mdx } " instead if you are using `src` directory
    
        
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {},
    plugins: [],
}
