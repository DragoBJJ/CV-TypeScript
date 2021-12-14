module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"]
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c"
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#1d1d1d",
          DARK: "#354358"
        },
        green: {
          DEFAULT: "#00f260"
        },
        ecru: {
          DEFAULT: "#faf7e5"
        }
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ["dark"]
    }
  },
  plugins: []
};
