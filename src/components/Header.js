import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="navitem-active" exact={ true }>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="navitem-active">Create</NavLink>
      </li>
      <li>
        <NavLink to="/help" activeClassName="navitem-active">Help</NavLink>
      </li>
    </ul>
  </header>
);
export default Header;