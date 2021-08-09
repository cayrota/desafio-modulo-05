<<<<<<< HEAD:frontend/desafio-m05/src/rotas.js
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
=======
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import React from 'react';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Produtos from './pages/Produtos';
import ValidacaoFormProvider from "./contexts/ValidacaoFormProvider";

import { AuthProvider } from './contexts/AuthContext';
import useAuth from './hooks/useAuth';

function RotasProtegidas(props) {
  const { token } = useAuth();
  return (
    <Route render={() => (token ? props.children : <Redirect to='/' />)} />
  );
}

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <ValidacaoFormProvider>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
          </ValidacaoFormProvider>
          <RotasProtegidas>
            <Route path='/produtos' component={Produtos} />
          </RotasProtegidas>
        </Switch>
      </Router>
    </AuthProvider>
>>>>>>> dcc6e2984ca1f5011b679e372332c6fd10430d66:frontend/desafio-m05/src/routes.js
  );
}

export default Routes;
