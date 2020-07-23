// LIGHT THEME: https://coolors.co/343440-e84a5f-fecea8-f5f7fb

export const COLORS = {
  light: "245, 247, 251",
  almond: "224, 211, 200",
  dark: "16, 20, 25",
  darkish: "52, 52, 64",
  darkBlue: "87, 55, 138",
  red: "232, 74, 95",
  gold: "254, 206, 168",
  white: "255, 255, 255"
};

export const THEMES = {
  headingText: {
    light: COLORS.red,
    dark: COLORS.red
  },
  bodyText: {
    light: COLORS.darkish,
    dark: COLORS.almond
  },
  background: {
    light: COLORS.light,
    dark: COLORS.dark
  },
  navLink: {
    light: COLORS.red,
    dark: COLORS.red
  },
  link: {
    light: COLORS.darkBlue,
    dark: COLORS.gold
  },
  linkHover: {
    light: COLORS.gold,
    dark: COLORS.almond
  },
  codeBlock: {
    light: COLORS.dark,
    dark: COLORS.dark
  }
};

export const COLOR_MODE_KEY = "color-mode";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
