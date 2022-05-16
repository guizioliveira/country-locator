module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        background: "#121214",
        "primary-dark": "#202024",
        "secundary-dark": "#29292E",
        shape: "#323238",
        "shape-border": "#575762",
        "shape-hover": "#29292e",
        primary: "#8257e5",
        "primary-darker": "#28203e",
        "primary-shape": "#734BD1",
        "primary-hover": "#9466ff",
        "primary-border": "#6833e4",
        "primary-shape": "#734bd1",
        "primary-light": "#996dff",
        grayer: "#e1e1e6",
        text: "#a8a8b3",
        "base-text": "#c4c4cc"
      }
    }
  },
  plugins: []
};
