import React from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";
import { ThemeProvider as EmotionProvider } from 'emotion-theming';


const color = {
  light: '#F5F7FB',
  dark: '#2A363B',
  orange: '#FF847C',
  red: '#E84A5F',
  amaranth: '#ee0e51',
  gold: '#FECEA8',
  white: 'white',
  opacity: (hexColor, value) => `${hexColor}${Math.round(value * 255).toString(16)}`
};

export const themes = {
  light: {
    name: 'light',
    background: color.light,
    foreground: color.dark,
    link: color.red,
    ...color
  },
  dark: {
    name: 'dark',
    background: color.dark,
    foreground: color.light,
    link: color.red,
    ...color
  },
}

export const ThemeContext = React.createContext({
  name: 'light',
  props: themes.light,
  updateTheme: () => {}
});

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = React.useState("light")

  return (
    <ThemeContext.Provider
      value={{
        name: theme,
        props: themes[theme],
        updateTheme: setTheme,
      }}
    >
      <EmotionProvider theme={themes[theme]}>
        {children}
      </EmotionProvider>
    </ThemeContext.Provider>
  )
}

export const ThemeLayout = ({ children, theme }) => (
  <ThemeWrapper theme={theme}>
    <Global
      styles={css`
        body {
          background-color: ${themes[theme.name].background};
          overflow: hidden;
        }
        button {
          border: none;
          background: none;
          cursor: pointer;
        }
      `}
    />
    {children}
  </ThemeWrapper>
)
export const ThemeWrapper = styled.div`
  color: ${p => p.theme.props.foreground};
  background-color: ${p => p.theme.props.background};
  transition: all 0.4s ease;
  min-height: 100vh;
  & a {
    color: ${p => p.theme.props.link};
  }
`;
