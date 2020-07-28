import Typography from "typography";


const typography = new Typography({
  headerFontFamily: ["Archia", "Montserrat"],
  bodyFontFamily: ["Quicksand","BlinkMacSystemFont", "sans-serif"],
  bodyWeight: 400,
  boldWeight: 700,
  baseFontSize: "18px",
  baseLineHeight: 1.5
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
