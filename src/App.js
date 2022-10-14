import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import PageDetail from "pages/PageDetail";
// import Example from "pages/Example";
import Checkout from "pages/Checkout";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./assets/scss/_style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route exact path="/example" component={Example} /> */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/properties/:id" component={PageDetail} />
      </Router>
    </div>
  );
}

export default App;
