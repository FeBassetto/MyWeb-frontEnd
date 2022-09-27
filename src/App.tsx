import React from "react";
import ProviderTheme from "./components/ThemeProvider/ProviderTheme";
import { GlobalStyle } from "./config/themes";
import Routing from "./routing.routes";

function App() {
  return (
    <div className="App">
      <ProviderTheme>
        <Routing />
        <GlobalStyle />
      </ProviderTheme>
    </div>
  );
}

export default App;
