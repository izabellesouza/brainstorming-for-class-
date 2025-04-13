/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Habilitando a alternância pelo class 'dark'
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
            },
            keyframes: {
                'pulse-slow': {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
                    '50%': { transform: 'scale(1.1)', opacity: '0.3' },
                },
            },
        },
    },
    plugins: [],
}
