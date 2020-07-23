import React from "react";
import { ThemeProvider } from "../utils/theme";
import GlobalStyles from "../utils/styles";


function App ({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles/>
      {children}
    </ThemeProvider>
  );
}

export default App;
