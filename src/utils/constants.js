export const COLORS = {
  red: "232, 74, 95",
  white: "255, 255, 255",
  light: "245, 247, 251",
  dark: "16, 20, 25",
  darkish: "83, 83, 101",
  gunMetal: "34, 41, 51",
  lightBlue: "173, 189, 218",
};

export const THEMES = {
  heading: {
    light: COLORS.red,
    dark: COLORS.red
  },
  headingShadow: {
    light: COLORS.darkish,
    dark: COLORS.white
  },
  bodyText: {
    light: COLORS.darkish,
    dark: COLORS.lightBlue
  },
  background: {
    light: COLORS.light,
    dark: COLORS.dark
  },
  tags: {
    light: COLORS.dark,
    dark: COLORS.white
  },
  button: {
    light: COLORS.dark,
    dark: COLORS.white
  },
  buttonTextHover: {
    light: COLORS.white,
    dark: COLORS.dark
  },
  navLink: {
    light: COLORS.darkish,
    dark: COLORS.lightBlue
  },
  navLinkActive: {
    light: COLORS.red,
    dark: COLORS.white
  },
  link: {
    light: COLORS.dark,
    dark: COLORS.white
  },
  linkHover: {
    light: COLORS.lightBlue,
    dark: COLORS.lightBlue
  },
  codeBlock: {
    light: COLORS.dark,
    dark: COLORS.gunMetal
  }
};

export const COLOR_MODE_KEY = "color-mode";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
