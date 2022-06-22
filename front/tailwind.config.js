/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'bottom-item': '0px 10px 50px rgb(0,0,0,0.08)'
            }
        },
    },
    plugins: []
}