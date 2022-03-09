import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';



const Header = (props) => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li>
        <NavLink to="/dashboard" activeClassName="navitem-active" exact={ true }>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="navitem-active">Create</NavLink>
      </li>
      <li>
        <button onClick={props.startLogout}>
          Logout
        </button>
      </li>
    </ul>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});



export { Header };
export default connect(undefined, mapDispatchToProps)(Header);
