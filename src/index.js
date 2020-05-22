import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from "styled-components";
import { theme } from "./style";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

// TODO: resize preview images to around 300x300 px
// TODO: optimize animations
// TODO: delivery via cdn ?
// TODO: videos don't load on iPhones
// TODO: background visible on previewing images on mobile (because of 100vh)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
