import React from 'react';
import ReactDOM from 'react-dom';
/**
 * HashRouter  - http://localhost:8000/#/home
 * BrowserRouter - http://localhost:8000/home - (需要服务器配合)
 * */
import { HashRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import Loadable from 'react-loadable';

import PrivateRoute from './components/PrivateRoute';

const LoadingComponent = () => {
  return <div>Loading</div>
}

const AsyncHello = Loadable({
  loading: LoadingComponent,
  loader: () => import('./components/Hello'),
});
const AsyncHome = Loadable({
  loading: LoadingComponent,
  loader: () => import('./components/Home'),
});
const AsyncLogin = Loadable({
  loading: LoadingComponent,
  loader: () => import('./components/Login'),
});

const AsyncNotFound = Loadable({
  loading: LoadingComponent,
  loader: () => import('./components/NotFound'),
});
const AsyncCounter = Loadable({
  loading: LoadingComponent,
  loader: () => import('./components/Counter'),
});

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={AsyncHome} />
        <Route path="/hello" component={AsyncHello} />
        <Route path="/login" component={AsyncLogin} />
        <Route path="/counter" component={AsyncCounter} />
        <Route path="/404" component={AsyncNotFound} />

        <PrivateRoute path="/" component={AsyncHome} />
      </Switch>
    </HashRouter>
  )
}

export default App;