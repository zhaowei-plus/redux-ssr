import React from 'react';
import { Route, Redirect } from 'react-router';

import { isAuthenticated } from '../service';

// 路由鉴权处理
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      !!isAuthenticated()
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}/>
  )
}

export default PrivateRoute;