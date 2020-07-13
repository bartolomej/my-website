import Typography from "typography"
import fairyGatesTheme from 'typography-theme-fairy-gates'


fairyGatesTheme.overrideThemeStyles = () => {
  return {
    "a": {
      textShadow: `none`,
      backgroundImage: 'none'
    },

  }
}

const typography = new Typography({
  ...fairyGatesTheme,
  headerFontFamily: ['Montserrat'],
  bodyFontFamily: ['Quicksand','BlinkMacSystemFont','-apple-system','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','Helvetica','Arial','sans-serif'],
  bodyWeight: 400,
  boldWeight: 700
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
