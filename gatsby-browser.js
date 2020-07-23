// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import React from "react";
import App from "./src/components/app"


export const wrapRootElement = ({ element }) => (
  <App>{element}</App>
)
