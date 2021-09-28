import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {LangProvider} from './context/langContext';

import BlurpleeApp from './router'

class App extends Component {
  render() {
    return (
      <LangProvider>
        <Router>
          <BlurpleeApp />
        </Router>
      </LangProvider>
    )
  }
}

export default App