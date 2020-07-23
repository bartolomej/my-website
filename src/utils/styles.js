import React from "react";
import { css, Global } from "@emotion/core";


function GlobalStyles () {

  return (
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
          color: rgb(var(--color-navLink));
          text-decoration: none;
          box-shadow: inset 0 -2px;
          transition: 0.2s ease-in box-shadow;
        }
        a:hover {
          box-shadow: inset 0 -10px rgb(var(--color-linkHover));
        }
        h1,h2,h3 {
          color: rgb(var(--color-headingText));
        }
        h3 {
          font-size: 1.5rem;
        }
        p,span,small {
          color: rgb(var(--color-bodyText));
        }
        svg {
          color: rgb(var(--color-bodyText));
        }
        footer, p, svg {
          transition: all 0.4s ease;
        }
      `}
    />
  );
}

export default GlobalStyles;
