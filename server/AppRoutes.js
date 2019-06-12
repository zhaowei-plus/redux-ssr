import React from 'react';
import ReactDOM from 'react-dom';
/**
 * HashRouter  - http://localhost:8000/#/home
 * BrowserRouter - http://localhost:8000/home - (需要服务器配合)
 * */
import { HashRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import Loadable from 'react-loadable';

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

function AppRoutes(props) {
  <Switch>
    <Route exact path="/hello" component={AsyncHello} />
    <Route path="/" component={AsyncHome} />
  </Switch>
}

export default AppRoutes