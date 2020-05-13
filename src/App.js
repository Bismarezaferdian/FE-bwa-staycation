import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/_style.scss";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
