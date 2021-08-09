import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/index";
import Cadastro from "./pages/Cadastro/index";
import ValidacaoFormProvider from "./contexts/ValidacaoFormProvider";

function Routes() {
  return (
    <Router>
      <Switch>
        <ValidacaoFormProvider>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" exact component={Cadastro} />
        </ValidacaoFormProvider>
      </Switch>
    </Router>
  );
}

export default Routes;
