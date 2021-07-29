import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/index";
import Cadastro from "./pages/Cadastro/index";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/cadastro" exact component={Cadastro} />
      </Switch>
    </Router>
  );
}

export default Routes;
