/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green_gradient: "#000000",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        yellow_light: "#CFFF92",
        dim_yellow: "#E6FFE2",
        dim_green: "#EEFFEB",
        skin_border: "rgba(255, 255, 255, 0.34)",
        sidebar_gradient:
          "linear-gradient(rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0) 100%)",
        sidebar_hover: "rgba(0, 0, 0, 0.06)",
        strip_bg: "rgba(250,248,242,1)",
        beige: "rgb(250, 248, 242)",
        dark_beige: "rgb(189, 117, 88)",
      },
      scale: {
        101: "1.01",
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        paused: "none",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },

    variants: {
      extend: { borderColor: ["hover"] },
    },
  },
  plugins: [],
};
