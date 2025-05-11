/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ...colors,
                beige: {
                    50: '#f5e6d8',
                    100: '#ede0d0',
                },
                navy: {
                    900: '#1a2544', // Dark navy blue from brochure
                },
                amber: {
                    700: '#c8a97e', // Gold/amber accent
                },
            }
        },
    },
    plugins: [],
};

// // tailwind.config.js
// export default {
//     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//     theme: {
//         extend: {
//             colors: {
//                 beige: {
//                     50: '#f5e6d8',
//                     100: '#ede0d0',
//                 },
//                 navy: {
//                     900: '#1a2544', // Dark navy blue from brochure
//                 },
//                 amber: {
//                     700: '#c8a97e', // Gold/amber accent
//                 },
//             },
//             fontFamily: {
//                 sans: ['Inter', 'sans-serif'],
//                 serif: ['Playfair Display', 'serif'],
//             },
//         },
//     },
//     plugins: [],
// };