import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./component/Navbar";
import Note from "./component/Note";

import GlobalStyle, { theme } from "../src/GlobalStyle";

function App() {
  const [dark, setDark] = useState(true);
  return (
    <ThemeProvider theme={dark ? theme.dark : theme.light}>
      <GlobalStyle />
      <Navbar dark={dark} setDark={setDark} />
      <Note dark={dark} />
    </ThemeProvider>
  );
}

export default App;
