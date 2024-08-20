/** @type {import('tailwindcss').Config} */
/*  */
module.exports = {
    darkMode: 'selector',
    experimental: {
        applyComplexClasses: true,
    },

    // ALERT Use "./src/**/*.{ js, ts, jsx, tsx, mdx } " instead if you are using `src` directory

    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-bg-dark': '#1c1b22',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
