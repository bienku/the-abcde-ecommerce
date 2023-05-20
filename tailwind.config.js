/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['.src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            screens: {
                xs: '400px',
            },
        },
    },
    plugins: [],
};
