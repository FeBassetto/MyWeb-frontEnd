import React from "react";
import Routing from "./routing.routes";

import { Provider } from "react-redux";
import { GlobalStyle } from "./config/themes";
import store from "./store/store";
import ProviderTheme from "./components/ThemeProvider/ProviderTheme";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProviderTheme>
          <Routing />
          <GlobalStyle />
        </ProviderTheme>
      </Provider>
    </div>
  );
}

export default App;
