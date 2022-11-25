/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "poppins": ["Poppins", "sans-serif"],
            },
        },
        colors: {
            primary: "#1A1B1F",
            "primary-base-low": "#5F6063",
            "primary-base-lowest": "#B8B8B8",
            back: "#ECECEC",
            "surface-high": "#D0D0D0",
            neutral: "#F5F6F8",
            "primary-neutral-low": "#7B7C7D",
            "primary-neutral-high": "#323947",
            "primary-neutral-lowest": "#B1B2B4",
            surface: "#121212",
            base: "#FFFFFF",
            "surface-low": "#888888",
            "divider-dark": "#202020",
            "divider-light": "#EAEAEA"
        }
    },
    plugins: [],
};