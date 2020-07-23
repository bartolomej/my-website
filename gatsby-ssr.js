import React from "react";
import Terser from "terser";

import {
  THEMES,
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP
} from "./src/utils/constants";
import App from "./src/components/app";

// SOLUTION TAKEN FROM: https://github.com/joshwcomeau/dark-mode-minimal

function setColorsByTheme () {
  const themes = '🌈';
  const colors = '🔴';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = "light";

  const hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light";
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(themes).forEach(([name, colorByTheme]) => {
    root.style.setProperty(`--color-${name}`, colorByTheme[colorMode]);
  });
  Object.entries(colors).forEach(([name, colorByTheme]) => {
    root.style.setProperty(`--color-${name}`, colorByTheme);
  });
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(THEMES))
    .replace("'🔴'", JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }}/>;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // Create a string holding each CSS variable:

  const cssThemesString = Object.entries(THEMES).reduce(
    (acc, [name, colorByTheme]) => (
      `${acc}\n--color-${name}: ${colorByTheme.light};`
    ), ""
  );

  const cssColorsString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => (
      `${acc}\n--color-${name}: ${colorByTheme};`
    ), ""
  );

  const wrappedInSelector = `html { ${cssThemesString} ${cssColorsString} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles/>);
  setPreBodyComponents(<MagicScriptTag/>);
};

export const wrapRootElement = ({ element }) => (
  <App>{element}</App>
);
