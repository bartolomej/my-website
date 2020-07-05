// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import React from "react";
import { ThemeProvider } from "./src/utils/theme";


export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
