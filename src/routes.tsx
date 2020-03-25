import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Template from './components/Template';

import SignIn from './pages/SignIn';
import Purchases from './pages/Purchases';
import PurchasesForm from './pages/Purchases/form';
import Clients from './pages/Clients';
import ClientsForm from './pages/Condominium/form';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Condominium from './pages/Condominium';
import CondominiumForm from './pages/Condominium/form';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Template>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/purchases" component={Purchases} />
        <Route exact path="/purchases/create" component={PurchasesForm} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/clients/create" component={ClientsForm} />
        <Route exact path="/condominium" component={Condominium} />
        <Route exact path="/condominium/create" component={CondominiumForm} />
        
      </Template>
    </Switch>
  </Router>
);

export default Routes;
