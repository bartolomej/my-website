// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

import React from "react";
import App from "./src/components/app";


export const wrapRootElement = ({ element }) => (
  <App>{element}</App>
);
