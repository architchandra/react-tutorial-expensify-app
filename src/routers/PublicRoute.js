import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';



const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest,
}) => (
  <Route {...rest} component={(props) => (
    !isAuthenticated
      ? <Component {...rest} />
      : <Redirect to="/dashboard" />
  )} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});



export { PublicRoute };
export default connect(mapStateToProps)(PublicRoute);