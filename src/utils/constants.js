export const COLORS = {
  red: "232, 74, 95",
  white: "255, 255, 255",
  light: "240, 245, 255",
  dark: "22, 22, 30",
  darkish: "83, 83, 101",
  gunMetal: "34, 41, 51",
  grey: "171, 172, 191",
  lightGrey: "61, 61, 78",
  gold: "255, 189, 105",
};

export const THEMES = {
  heading1: {
    light: COLORS.red,
    dark: COLORS.red
  },
  heading: {
    light: COLORS.dark,
    dark: COLORS.light
  },
  headingShadow: {
    light: "0, 255, 255",
    dark: "0, 255, 255"
  },
  bodyText: {
    light: COLORS.darkish,
    dark: COLORS.grey
  },
  background: {
    light: COLORS.light,
    dark: COLORS.dark
  },
  tags: {
    light: COLORS.lightGrey,
    dark: COLORS.lightGrey
  },
  button: {
    light: COLORS.red,
    dark: COLORS.red
  },
  buttonTextHover: {
    light: COLORS.white,
    dark: COLORS.white
  },
  navLink: {
    light: COLORS.darkish,
    dark: COLORS.grey
  },
  navLinkActive: {
    light: COLORS.red,
    dark: COLORS.red
  },
  link: {
    light: COLORS.dark,
    dark: COLORS.light
  },
  linkHover: {
    light: COLORS.grey,
    dark: COLORS.lightGrey
  },
  codeBlock: {
    light: COLORS.dark,
    dark: COLORS.gunMetal
  }
};

export const COLOR_MODE_KEY = "color-mode";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
