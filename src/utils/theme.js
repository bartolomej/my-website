import React from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";
import { ThemeProvider as EmotionProvider } from 'emotion-theming';


export const color = {
  light: '#F5F7FB',
  almond: '#e0d3c8',
  dark: '#101419',
  darkish: '#343440',
  orange: '#FF847C',
  red: '#E84A5F',
  amaranth: '#ee0e51',
  gold: '#FECEA8',
  white: '#FFFFFF',
};

export const opacity = (hexColor, value) => `${hexColor}${Math.round(value * 255).toString(16)}`

export const themes = {
  light: {
    name: 'light',
    background: color.light,
    headingText: color.red,
    bodyText: color.darkish,
    foreground: color.dark,
    link: color.red,
    ...color
  },
  dark: {
    name: 'dark',
    background: color.dark,
    headingText: color.red,
    bodyText: color.almond,
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
  const [theme, setTheme] = React.useState("light");

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

export const ThemeLayout = ({ children, theme, innerRef }) => (
  <ThemeWrapper ref={innerRef} theme={theme}>
    <Global
      styles={css`
        * {
          z-index: 1;
        }
        body {
          overflow: hidden;
        }
        button {
          border: none;
          background: none;
          cursor: pointer;
        }
        a {
          text-decoration: none;
          box-shadow: inset 0 -2px;
          transition: 0.2s ease-in box-shadow;
        }
        a:hover {
          box-shadow: inset 0 -10px ${theme.props.gold};
        }
        h1,h2,h3 {
          color: ${theme.props.headingText};
        }
        h3 {
          font-size: 1.5rem;
        }
        p,span {
          color: ${theme.props.bodyText};
        }
        svg {
          color: ${theme.props.bodyText};
        }
        footer, p, svg {
          transition: all 0.4s ease;
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
