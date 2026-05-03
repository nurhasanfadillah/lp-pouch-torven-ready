/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        torven: {
          navy: "#0B1F3A",
          navyDark: "#061525",
          navyLight: "#1E3A5F",
          navyMid: "#0F2847",
          cream: "#FFF7F2",
          sand: "#E8D4C2",
          amber: "#FFB23F",
          text: "#1B1112",
          border: "#E7D6CE"
        }
      },
      fontFamily: {
        display: ["Archivo Black", "Space Grotesk", "sans-serif"],
        body: ["DM Sans", "Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 18px 60px rgba(11, 31, 58, 0.25)",
        amber: "0 12px 32px rgba(255, 178, 63, 0.28)"
      }
    },
  },
  plugins: [],
}
