const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./**/*.html", "./**/*.njk", "./node_modules/flowbite/**/*.js"],
    theme: {
        container: {
            center: true,
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            sienna: "#ef6f53",
            metal: {
                DEFAULT: "#285a84",
                300: "#B7C6D3",
            },
        },
        extend: {
            fontFamily: {
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
                titillium: ['"Titillium Web"'],
            },

            colors: {},
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
