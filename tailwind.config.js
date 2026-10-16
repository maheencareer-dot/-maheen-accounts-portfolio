module.exports = {
  darkMode: "media",
  content: ["./app/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: { paper: "var(--paper)", panel: "var(--panel)", ink: "var(--ink)", mute: "var(--mute)", rule: "var(--rule)", accent: "var(--accent)" },
      fontFamily: { serif: ["Georgia", "Cambria", '"Times New Roman"', "serif"] },
    },
  },
  plugins: [],
};
