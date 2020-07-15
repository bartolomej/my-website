import Typography from "typography"

const typography = new Typography({
  headerFontFamily: ['Montserrat'],
  bodyFontFamily: ['Raleway', 'Helvetica Neue','sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  baseFontSize: '18px',
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
