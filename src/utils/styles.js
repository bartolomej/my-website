import React from "react";
import { css, Global } from "@emotion/core";


function GlobalStyles () {

  return (
    <Global
      styles={css`
        * {
          z-index: 1;
          transition: 0.5s background ease-in-out, 0.5s color ease-in-out;
        }
        body, body {
          background: rgb(var(--color-background));
          overscroll-behavior-y: none;
          overflow: hidden;
          scroll-behavior: smooth;
        }
        button {
          border: none;
          background: none;
          cursor: pointer;
        }
        a {
          color: rgb(var(--color-link));
          text-decoration: none;
          box-shadow: inset 0 -2px;
          transition: 0.2s ease-in box-shadow;
        }
        a:hover {
          box-shadow: inset 0 -10px rgb(var(--color-linkHover));
        }
        h1 {
          font-size: 2.2rem;
          text-align: center;
          margin-bottom: 14vh;
        }
        h1 {
          color: rgb(var(--color-heading1));
        }
        h2,h3,h4,h5,h6,th {
          color: rgb(var(--color-heading));
        }
        p,span,small,li,td,hr {
          color: rgb(var(--color-bodyText));
        }
        table, tr, td, th {
          border-color: rgba(var(--color-tags),0.2);
        }
        svg {
          color: rgb(var(--color-bodyText));
        }
      `}
    />
  );
}

export default GlobalStyles;
