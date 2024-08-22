/** @type {import('tailwindcss').Config} */
/*  */
module.exports = {
    darkMode: 'selector',
    experimental: {
        applyComplexClasses: true,
    },
variants:{},
    // ALERT Use "./src/**/*.{ js, ts, jsx, tsx, mdx } " instead if you are using `src` directory

    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'outer-space': '#414A4C',
                'dark-gray': '#A9A9A9',
                silver: '#C0C0C0',
                'off-white': '#F2F0EF',
                licorice: '#1A1110',
                onyx: '#353839',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
