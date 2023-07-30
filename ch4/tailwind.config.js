/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{vue,js,jsx,ts,tsx}", "index.html"],
    theme: {
        extend: {
            backgroundSize: {
                auto: "auto",
                cover: "cover",
                contain: "contain",
                "100%": "110%",
                16: "4rem",
            },
        },
    },
    plugins: [],
};
// import ima from './src/assets/images/'
// 2.6 3.6
// 3.6 4.6
// 4.6 5.6
// 5.6 6.6
// 6.6 7.6
// 7.6 8.6
