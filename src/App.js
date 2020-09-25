import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./default.scss";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
