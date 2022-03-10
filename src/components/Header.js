import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';



const Header = (props) => (
  <header>
    <Link to="/dashboard" exact={ true }>
      <h1>
        Expensify
      </h1>
    </Link>
    <button onClick={props.startLogout}>
      Logout
    </button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});



export { Header };
export default connect(undefined, mapDispatchToProps)(Header);
