import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const ExpenseDashboardPage = () => (
  <h2>Expense Dashboard Page</h2>
);

const AddExpensePage = () => (
  <h2>Add an Expense</h2>
);

const EditExpensePage = () => (
  <h2>Edit an Expense</h2>
);

const HelpPage = () => (
  <h2>Help</h2>
);

const NotFoundPage = () => (
  <div>
    <h2>Page not found</h2>
    <p>Go to the <Link to="/">dashboard</Link>.</p>
  </div>
);

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
        <NavLink to="/edit" activeClassName="navitem-active">Edit</NavLink>
      </li>
      <li>
        <NavLink to="/help" activeClassName="navitem-active">Help</NavLink>
      </li>
    </ul>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ ExpenseDashboardPage } exact={ true } />
        <Route path="/create" component={ AddExpensePage } />
        <Route path="/edit" component={ EditExpensePage } />
        <Route path="/help" component={ HelpPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));