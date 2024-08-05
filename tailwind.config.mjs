/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ts-600": "#2993D6",
        "ts-dark": "#0D0F11",
      },
      fontFamily: {
        rubik: "Rubik, sans-serif",
        serif: "Quattrocento, serif",
      },
    },
  },
  plugins: [],
};
