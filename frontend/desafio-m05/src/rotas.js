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
  );
}

export default Routes;
