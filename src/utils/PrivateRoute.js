import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import history from './history';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || JSON.parse(localStorage.getItem('user').length === 0)) {
    history.push('/login');
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to={'/login'} />;
      }}
    />
  );
};

export default PrivateRoute;
