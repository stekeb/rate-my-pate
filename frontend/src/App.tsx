import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./page/Home";
import Details from "./page/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to="/" className="header-link">
              RateMyPet.com
            </Link>
          </h1>
        </header>
        <div className="content">
          <Switch>
            <Route path="/pets/:id" component={Details} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
